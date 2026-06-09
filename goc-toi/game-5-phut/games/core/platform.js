(function () {
  "use strict";

  var factories = Object.create(null);
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

  function fallbackMotion(element, from, duration, easing) {
    element.style.transition = "none";
    if (from.transform) element.style.transform = from.transform;
    if (from.opacity !== undefined) element.style.opacity = from.opacity;
    element.getBoundingClientRect();
    window.requestAnimationFrame(function () {
      element.style.transition = "transform " + duration + "ms " + easing +
        ", opacity " + duration + "ms " + easing;
      element.style.removeProperty("transform");
      element.style.removeProperty("opacity");
      window.setTimeout(function () {
        element.style.removeProperty("transition");
      }, duration + 30);
    });
  }

  function motionRender(root, html, options) {
    options = options || {};
    var previous = Object.create(null);
    root.querySelectorAll("[data-motion-key]").forEach(function (element) {
      previous[element.dataset.motionKey] = {
        rect: element.getBoundingClientRect(),
        state: element.dataset.motionState || element.className + "|" + element.textContent
      };
    });
    var hasPrevious = Object.keys(previous).length > 0;
    root.innerHTML = html;
    if (reduceMotion && reduceMotion.matches) return;
    root.querySelectorAll("[data-motion-key]").forEach(function (element) {
      var before = previous[element.dataset.motionKey];
      var state = element.dataset.motionState || element.className + "|" + element.textContent;
      var duration = Number(options.duration) || 240;
      if (!before) {
        if (!hasPrevious) return;
        var enterFrom = element.dataset.motionEnter === "drop"
          ? { opacity: .35, transform: "translateY(-120%) scale(.82)" }
          : { opacity: .35, transform: "scale(.86)" };
        var enterDuration = Math.min(duration, 220);
        fallbackMotion(element, enterFrom, enterDuration, "cubic-bezier(.2,.8,.2,1)");
        return;
      }
      var after = element.getBoundingClientRect();
      var deltaX = before.rect.left - after.left;
      var deltaY = before.rect.top - after.top;
      if (Math.abs(deltaX) > .5 || Math.abs(deltaY) > .5) {
        var moveFrom = { transform: "translate(" + deltaX + "px," + deltaY + "px)" };
        var moveEasing = options.easing || "cubic-bezier(.2,.8,.2,1)";
        fallbackMotion(element, moveFrom, duration, moveEasing);
      } else if (before.state !== state) {
        var changeFrom = { transform: "scale(.88)", opacity: .58 };
        var changeDuration = Math.min(duration, 180);
        fallbackMotion(element, changeFrom, changeDuration, "cubic-bezier(.2,.8,.2,1)");
      }
    });
  }

  function createRuntime(root, callbacks) {
    var destroyed = false;
    var paused = false;
    var settled = false;
    var cleanups = [];
    var timers = [];

    function removeTimer(timer) {
      var index = timers.indexOf(timer);
      if (index >= 0) timers.splice(index, 1);
    }

    function schedule(timer) {
      timer.startedAt = Date.now();
      timer.handle = window.setTimeout(function () {
        timer.handle = null;
        removeTimer(timer);
        if (!destroyed) timer.callback();
      }, timer.remaining);
    }

    function timeout(callback, delay) {
      var timer = {
        callback: callback,
        remaining: delay,
        startedAt: 0,
        handle: null
      };
      timers.push(timer);
      if (!paused) schedule(timer);
      return function () {
        if (timer.handle !== null) window.clearTimeout(timer.handle);
        removeTimer(timer);
      };
    }

    function interval(callback, delay) {
      var cancelled = false;
      var cancelCurrent;
      function tick() {
        if (cancelled || destroyed) return;
        callback();
        if (!cancelled && !destroyed) cancelCurrent = timeout(tick, delay);
      }
      cancelCurrent = timeout(tick, delay);
      return function () {
        cancelled = true;
        if (cancelCurrent) cancelCurrent();
      };
    }

    function listen(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      var cleanup = function () { target.removeEventListener(type, handler, options); };
      cleanups.push(cleanup);
      return cleanup;
    }

    function cleanup(callback) {
      cleanups.push(callback);
      return callback;
    }

    function emit(name, detail) {
      if (destroyed || paused || settled || !callbacks[name]) return;
      settled = true;
      callbacks[name](detail);
    }

    return {
      timeout: timeout,
      interval: interval,
      listen: listen,
      cleanup: cleanup,
      isPaused: function () { return paused; },
      isDestroyed: function () { return destroyed; },
      win: function (detail) { emit("onWin", detail); },
      lose: function (detail) { emit("onLose", detail); },
      hint: function (detail) {
        if (!destroyed && callbacks.onHint) callbacks.onHint(detail);
      },
      setPaused: function (value) {
        if (destroyed || paused === value) return;
        paused = value;
        root.classList.toggle("game-paused", paused);
        root.inert = paused;
        timers.slice().forEach(function (timer) {
          if (paused && timer.handle !== null) {
            window.clearTimeout(timer.handle);
            timer.handle = null;
            timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.startedAt));
          } else if (!paused && timer.handle === null) {
            schedule(timer);
          }
        });
      },
      destroy: function () {
        if (destroyed) return;
        destroyed = true;
        root.inert = false;
        root.classList.remove("game-paused");
        timers.slice().forEach(function (timer) {
          if (timer.handle !== null) window.clearTimeout(timer.handle);
        });
        timers.length = 0;
        cleanups.splice(0).reverse().forEach(function (dispose) {
          try { dispose(); } catch (error) { console.error(error); }
        });
      }
    };
  }

  function gesture(element, handlers, runtime) {
    var start = null;
    var suppressClick = false;
    var cancelSuppress;

    function down(event) {
      if (runtime.isPaused()) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      start = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        target: event.target
      };
      element.classList.add("gesture-active");
    }

    function reset() {
      start = null;
      element.classList.remove("gesture-active");
    }

    function up(event) {
      if (!start || start.id !== event.pointerId || runtime.isPaused()) return reset();
      var dx = event.clientX - start.x;
      var dy = event.clientY - start.y;
      var distance = Math.hypot(dx, dy);
      var endTarget = document.elementFromPoint(event.clientX, event.clientY) || event.target;
      if (distance >= (handlers.threshold || 18) && handlers.swipe) {
        suppressClick = true;
        if (cancelSuppress) cancelSuppress();
        cancelSuppress = runtime.timeout(function () { suppressClick = false; }, 80);
        handlers.swipe({
          dx: dx,
          dy: dy,
          startTarget: start.target,
          endTarget: endTarget
        });
      } else if (handlers.tap) {
        handlers.tap({ target: start.target });
      }
      reset();
    }

    function click(event) {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }

    runtime.listen(element, "pointerdown", down);
    runtime.listen(element, "pointerup", up);
    runtime.listen(element, "pointercancel", reset);
    runtime.listen(element, "click", click, true);
  }

  function register(id, factory) {
    if (!id || typeof factory !== "function") throw new TypeError("Đăng ký game không hợp lệ.");
    if (factories[id]) throw new Error("Game đã được đăng ký: " + id);
    factories[id] = factory;
  }

  function mount(id, root, options) {
    var factory = factories[id];
    if (!factory) throw new Error("Game chưa được triển khai: " + id);
    var runtime = createRuntime(root, options);
    var gameOptions = Object.assign({}, options, {
      runtime: runtime,
      onHint: runtime.hint,
      onWin: runtime.win,
      onLose: runtime.lose
    });
    var instance;
    try {
      instance = factory(root, gameOptions) || {};
    } catch (error) {
      runtime.destroy();
      throw error;
    }
    if (typeof instance !== "object") {
      runtime.destroy();
      throw new TypeError("Game phải trả về một lifecycle object: " + id);
    }
    return {
      setPaused: function (value) {
        runtime.setPaused(value);
        if (typeof instance.setPaused === "function") instance.setPaused(value);
      },
      destroy: function () {
        try {
          if (typeof instance.destroy === "function") instance.destroy();
        } finally {
          runtime.destroy();
        }
      }
    };
  }

  window.GamePlatform = {
    register: register,
    has: function (id) { return Boolean(factories[id]); },
    mount: mount,
    gesture: gesture,
    motion: {
      render: motionRender,
      reduced: function () { return Boolean(reduceMotion && reduceMotion.matches); }
    },
    registeredIds: function () { return Object.keys(factories); }
  };
}());
