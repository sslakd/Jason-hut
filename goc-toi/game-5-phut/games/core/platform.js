(function () {
  "use strict";

  var factories = Object.create(null);

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
    registeredIds: function () { return Object.keys(factories); }
  };
}());
