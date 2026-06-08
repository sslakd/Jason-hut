(function () {
  function gesture(element, onSwipe, onTap) {
    var start;
    function down(event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      start = { id: event.pointerId, x: event.clientX, y: event.clientY, target: event.target };
    }
    function up(event) {
      if (!start || start.id !== event.pointerId) return;
      var dx = event.clientX - start.x;
      var dy = event.clientY - start.y;
      if (Math.hypot(dx, dy) > 18 && onSwipe) onSwipe(dx, dy, start.target, event.target);
      else if (onTap) onTap(start.target);
      start = null;
    }
    element.addEventListener("pointerdown", down);
    element.addEventListener("pointerup", up);
    return function () {
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("pointerup", up);
    };
  }

  function ticTacToe(root, options) {
    var cells = Array(9).fill("");
    var locked = false;
    var timer;
    var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    function winner() {
      return wins.find(function (line) {
        return cells[line[0]] && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]];
      });
    }
    function finish() {
      var line = winner();
      if (line) {
        if (cells[line[0]] === "X") options.onWin("Bạn đã nối được ba ô.");
        else options.onLose("Máy đã nối được ba ô.");
        return true;
      }
      if (cells.every(Boolean)) {
        options.onWin("Ván hòa. Bạn đã giữ bàn không bị thua.");
        return true;
      }
      return false;
    }
    function aiTurn() {
      locked = true;
      timer = setTimeout(function () {
        var choices = cells.map(function (value, i) { return value ? -1 : i; }).filter(function (i) { return i >= 0; });
        var winMove = choices.find(function (i) { cells[i] = "O"; var w = winner(); cells[i] = ""; return w; });
        var blockMove = choices.find(function (i) { cells[i] = "X"; var w = winner(); cells[i] = ""; return w; });
        var pick = winMove !== undefined ? winMove : blockMove !== undefined ? blockMove :
          choices[Math.floor(Math.random() * choices.length)];
        if (pick !== undefined) cells[pick] = "O";
        locked = false;
        render();
        finish();
      }, Math.max(220, 620 / options.difficulty.multiplier));
    }
    function play(index) {
      if (locked || cells[index]) return;
      cells[index] = "X";
      window.GameAudio.tap();
      render();
      if (!finish()) aiTurn();
    }
    function render() {
      root.innerHTML = '<div class="ttt-board">' + cells.map(function (value, index) {
        return '<button type="button" data-cell="' + index + '" class="' + value.toLowerCase() +
          '" aria-label="Ô ' + (index + 1) + '">' + value + "</button>";
      }).join("") + "</div>";
    }
    root.onclick = function (event) {
      var cell = event.target.closest("[data-cell]");
      if (cell) play(Number(cell.dataset.cell));
    };
    options.onHint("Chạm ô trống để đặt X và nối ba ô.");
    render();
    return { destroy: function () { clearTimeout(timer); root.onclick = null; } };
  }

  function connectFour(root, options) {
    var rows = 6, cols = 7;
    var board = Array.from({length: rows}, function () { return Array(cols).fill(0); });
    var locked = false;
    var timer;
    function drop(col, player) {
      for (var row = rows - 1; row >= 0; row -= 1) {
        if (!board[row][col]) { board[row][col] = player; return {row: row, col: col}; }
      }
      return null;
    }
    function win(last, player) {
      if (!last) return false;
      return [[1,0],[0,1],[1,1],[1,-1]].some(function (dir) {
        var count = 1;
        [-1,1].forEach(function (sign) {
          var r = last.row + dir[0] * sign, c = last.col + dir[1] * sign;
          while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === player) {
            count += 1; r += dir[0] * sign; c += dir[1] * sign;
          }
        });
        return count >= 4;
      });
    }
    function playerDrop(col) {
      if (locked) return;
      var last = drop(col, 1);
      if (!last) return;
      render();
      if (win(last, 1)) { options.onWin("Bạn đã nối bốn quân."); return; }
      locked = true;
      timer = setTimeout(function () {
        var available = Array.from({length: cols}, function (_, i) { return board[0][i] ? -1 : i; })
          .filter(function (i) { return i >= 0; });
        if (!available.length) {
          locked = false;
          options.onWin("Bàn đã đầy và bạn giữ được thế hòa.");
          return;
        }
        var chosen = available[Math.floor(Math.random() * available.length)];
        var aiLast = drop(chosen, 2);
        locked = false;
        render();
        if (win(aiLast, 2)) options.onLose("Máy đã nối bốn quân trước.");
      }, Math.max(220, 600 / options.difficulty.multiplier));
    }
    function render() {
      root.innerHTML = '<div class="connect-board">' + board.map(function (row) {
        return row.map(function (value, col) {
          return '<button data-column="' + col + '" class="disc p' + value + '" aria-label="Cột ' +
            (col + 1) + '"></button>';
        }).join("");
      }).join("") + "</div>";
    }
    root.onclick = function (event) {
      var cell = event.target.closest("[data-column]");
      if (cell) playerDrop(Number(cell.dataset.column));
    };
    options.onHint("Chạm một cột để thả quân. Nối bốn quân để thắng.");
    render();
    return { destroy: function () { clearTimeout(timer); root.onclick = null; } };
  }

  function slideNumber(root, options) {
    var board = Array(16).fill(0);
    var target = options.level > 2 ? 512 : 256;
    function add() {
      var empty = board.map(function (v,i) { return v ? -1 : i; }).filter(function (i) { return i >= 0; });
      if (!empty.length) return;
      board[empty[Math.floor(Math.random() * empty.length)]] = Math.random() < .88 ? 2 : 4;
    }
    function compress(line) {
      var values = line.filter(Boolean);
      for (var i = 0; i < values.length - 1; i += 1) {
        if (values[i] === values[i+1]) { values[i] *= 2; values.splice(i+1,1); }
      }
      while (values.length < 4) values.push(0);
      return values;
    }
    function move(direction) {
      var old = board.join(",");
      var next = Array(16).fill(0);
      for (var n = 0; n < 4; n += 1) {
        var line = [];
        for (var m = 0; m < 4; m += 1) {
          var r = direction === "up" || direction === "down" ? m : n;
          var c = direction === "up" || direction === "down" ? n : m;
          if (direction === "right" || direction === "down") {
            r = direction === "down" ? 3 - m : n;
            c = direction === "right" ? 3 - m : n;
          }
          line.push(board[r * 4 + c]);
        }
        line = compress(line);
        for (var k = 0; k < 4; k += 1) {
          var rr = direction === "up" || direction === "down" ? k : n;
          var cc = direction === "up" || direction === "down" ? n : k;
          if (direction === "right" || direction === "down") {
            rr = direction === "down" ? 3 - k : n;
            cc = direction === "right" ? 3 - k : n;
          }
          next[rr * 4 + cc] = line[k];
        }
      }
      board = next;
      if (board.join(",") !== old) { add(); window.GameAudio.tap(); }
      render();
      if (board.some(function (v) { return v >= target; })) options.onWin("Bạn đã tạo được ô " + target + ".");
      else if (!board.includes(0) && !board.some(function (value, i) {
        var r = Math.floor(i / 4), c = i % 4;
        return (c < 3 && board[i + 1] === value) || (r < 3 && board[i + 4] === value);
      })) options.onLose("Bàn số đã kín.");
    }
    function render() {
      root.innerHTML = '<div class="number-board">' + board.map(function (value) {
        return '<div class="n' + value + '">' + (value || "") + "</div>";
      }).join("") + "</div>";
    }
    var unbind = gesture(root, function (dx,dy) {
      if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? "right" : "left");
      else move(dy > 0 ? "down" : "up");
    });
    function key(event) {
      var map = {ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"};
      if (map[event.key]) { event.preventDefault(); move(map[event.key]); }
    }
    window.addEventListener("keydown", key);
    add(); add();
    options.onHint("Vuốt để gộp các ô cùng số. Tạo ô " + target + ".");
    render();
    return { destroy: function () { unbind(); window.removeEventListener("keydown", key); } };
  }

  function minesweeper(root, options) {
    var size = options.difficulty.multiplier >= 2 ? 8 : 7;
    var mines = Math.min(12, 6 + Math.round(options.difficulty.multiplier * 2));
    var cells = Array.from({length:size*size}, function () { return {mine:false,open:false,flag:false,count:0}; });
    var first = true;
    var ended = false;
    function seed(safe) {
      var placed = 0;
      while (placed < mines) {
        var i = Math.floor(Math.random() * cells.length);
        if (i !== safe && !cells[i].mine) { cells[i].mine = true; placed += 1; }
      }
      cells.forEach(function (cell, i) {
        var r=Math.floor(i/size),c=i%size;
        cell.count=neighbors(r,c).filter(function (n) { return cells[n].mine; }).length;
      });
    }
    function neighbors(r,c) {
      var out=[];
      for(var dr=-1;dr<=1;dr++)for(var dc=-1;dc<=1;dc++){
        var nr=r+dr,nc=c+dc;if((dr||dc)&&nr>=0&&nr<size&&nc>=0&&nc<size)out.push(nr*size+nc);
      }
      return out;
    }
    function reveal(index) {
      if (cells[index].flag || cells[index].open) return;
      cells[index].open=true;
      if (!cells[index].count && !cells[index].mine) {
        neighbors(Math.floor(index/size),index%size).forEach(reveal);
      }
    }
    function open(index) {
      if (ended || cells[index].flag || cells[index].open) return;
      if (first) { seed(index); first=false; }
      if (cells[index].mine) {
        cells[index].open=true;
        ended=true;
        render();
        options.onLose("Bạn đã chạm phải mìn.");
        return;
      }
      reveal(index);
      render();
      if (cells.filter(function(c){return !c.mine&&!c.open;}).length===0) {
        ended=true;
        options.onWin("Bạn đã mở hết ô an toàn.");
      }
    }
    function flag(index) { if (!cells[index].open) { cells[index].flag=!cells[index].flag; render(); } }
    function render() {
      root.innerHTML='<div class="mine-board" style="--mine-size:'+size+'">'+cells.map(function(cell,i){
        var content=cell.open?(cell.mine?'<i class="fa-solid fa-bomb"></i>':(cell.count||"")):(cell.flag?'<i class="fa-solid fa-flag"></i>':"");
        return '<button data-mine="'+i+'" class="'+(cell.open?"open ":"")+(cell.mine&&cell.open?"boom":"")+'">'+content+'</button>';
      }).join("")+"</div>";
    }
    var pressTimer;
    root.onpointerdown=function(e){var b=e.target.closest("[data-mine]");if(b)pressTimer=setTimeout(function(){flag(Number(b.dataset.mine));pressTimer=null;},450);};
    root.onpointerup=function(e){var b=e.target.closest("[data-mine]");if(pressTimer){clearTimeout(pressTimer);pressTimer=null;if(b)open(Number(b.dataset.mine));}};
    root.onpointercancel=function(){clearTimeout(pressTimer);pressTimer=null;};
    options.onHint("Chạm để mở ô, giữ để cắm cờ.");
    render();
    return {destroy:function(){clearTimeout(pressTimer);root.onpointerdown=root.onpointerup=root.onpointercancel=null;}};
  }

  function memoryGame(root, options) {
    var pairs = options.difficulty.multiplier >= 2 ? 8 : 6;
    var symbols = ["fa-leaf","fa-star","fa-heart","fa-moon","fa-sun","fa-bell","fa-gem","fa-cloud"];
    var deck = symbols.slice(0,pairs).concat(symbols.slice(0,pairs)).sort(function(){return Math.random()-.5;});
    var open=[],matched=Array(deck.length).fill(false),locked=false,moves=0,flipTimer=null;
    function flip(i) {
      if(locked||matched[i]||open.includes(i))return;
      open.push(i);render();
      if(open.length===2){moves++;locked=true;flipTimer=setTimeout(function(){
        if(deck[open[0]]===deck[open[1]]){matched[open[0]]=matched[open[1]]=true;window.GameAudio.open();}
        open=[];locked=false;render();
        if(matched.every(Boolean))options.onWin("Bạn đã ghép hết cặp sau "+moves+" lượt.");
      },500);}
    }
    function render(){root.innerHTML='<div class="memory-board">'+deck.map(function(s,i){
      var shown=open.includes(i)||matched[i];
      return '<button data-memory="'+i+'" class="'+(shown?"shown ":"")+(matched[i]?"matched":"")+'">'+
        (shown?'<i class="fa-solid '+s+'"></i>':'<i class="fa-solid fa-question"></i>')+'</button>';
    }).join("")+"</div>";}
    root.onclick=function(e){var b=e.target.closest("[data-memory]");if(b)flip(Number(b.dataset.memory));};
    options.onHint("Chạm hai thẻ để tìm các cặp giống nhau.");
    render();
    return {destroy:function(){clearTimeout(flipTimer);root.onclick=null;}};
  }

  function slidingPuzzle(root, options) {
    var side=options.difficulty.multiplier>=2?4:3;
    var board=Array.from({length:side*side},function(_,i){return i;});
    function adjacent(a,b){var ar=Math.floor(a/side),ac=a%side,br=Math.floor(b/side),bc=b%side;return Math.abs(ar-br)+Math.abs(ac-bc)===1;}
    for(var n=0;n<120;n++){var z=board.indexOf(0);var choices=board.map(function(_,i){return adjacent(i,z)?i:-1;}).filter(function(i){return i>=0;});var p=choices[Math.floor(Math.random()*choices.length)];[board[z],board[p]]=[board[p],board[z]];}
    var moves=0;
    function move(i){var z=board.indexOf(0);if(!adjacent(i,z))return;[board[z],board[i]]=[board[i],board[z]];moves++;render();if(board.every(function(v,index){return v===index;}))options.onWin("Hoàn thành tranh sau "+moves+" lượt.");}
    function render(){root.innerHTML='<div class="slide-board" style="--slide-side:'+side+'">'+board.map(function(v,i){return '<button data-slide="'+i+'" class="'+(!v?"empty":"")+'">'+(v||"")+'</button>';}).join("")+"</div>";}
    root.onclick=function(e){var b=e.target.closest("[data-slide]");if(b)move(Number(b.dataset.slide));};
    options.onHint("Chạm mảnh cạnh ô trống để đưa các số về đúng thứ tự.");
    render();
    return {destroy:function(){root.onclick=null;}};
  }

  function snakeGame(root, options) {
    var canvas=document.createElement("canvas");canvas.className="arcade-canvas snake-canvas";canvas.width=360;canvas.height=480;
    root.innerHTML='<div class="canvas-game"></div>';root.querySelector(".canvas-game").appendChild(canvas);
    var ctx=canvas.getContext("2d"),cell=24,cols=15,rows=20,snake=[{x:7,y:10},{x:6,y:10}],dir={x:1,y:0},food={},score=0,ended=false,paused=false;
    var target=5+Math.min(options.level,5);
    function place(){do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};}while(snake.some(function(s){return s.x===food.x&&s.y===food.y;}));}
    function turn(x,y){if(dir.x+x===0&&dir.y+y===0)return;dir={x:x,y:y};}
    function tick(){if(paused||ended)return;var h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};if(h.x<0||h.x>=cols||h.y<0||h.y>=rows||snake.some(function(s){return s.x===h.x&&s.y===h.y;})){ended=true;options.onLose("Rắn đã va chạm.");return;}snake.unshift(h);if(h.x===food.x&&h.y===food.y){score++;place();if(score>=target){ended=true;options.onWin("Bạn đã ăn đủ "+target+" món.");}}else snake.pop();draw();}
    function draw(){ctx.fillStyle="#f7fbf5";ctx.fillRect(0,0,360,480);ctx.fillStyle="#d7a959";ctx.beginPath();ctx.arc(food.x*cell+12,food.y*cell+12,8,0,Math.PI*2);ctx.fill();ctx.fillStyle="#5f9168";snake.forEach(function(s,i){ctx.fillStyle=i?"#78a67e":"#3f6948";ctx.fillRect(s.x*cell+2,s.y*cell+2,20,20);});ctx.fillStyle="#294a31";ctx.font="600 13px sans-serif";ctx.fillText(score+"/"+target,10,20);}
    var unbind=gesture(canvas,function(dx,dy){if(Math.abs(dx)>Math.abs(dy))turn(dx>0?1:-1,0);else turn(0,dy>0?1:-1);});
    function key(e){var m={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(m[e.key]){e.preventDefault();turn(m[e.key][0],m[e.key][1]);}}
    window.addEventListener("keydown",key);place();draw();var timer=setInterval(tick,Math.max(85,190/options.difficulty.multiplier));
    options.onHint("Vuốt để đổi hướng và ăn đủ "+target+" món.");
    return {setPaused:function(v){paused=v;},destroy:function(){ended=true;clearInterval(timer);unbind();window.removeEventListener("keydown",key);}};
  }

  function towerGame(root, options) {
    var canvas=document.createElement("canvas");canvas.className="arcade-canvas tower-canvas";canvas.width=360;canvas.height=520;
    root.innerHTML='<div class="canvas-game"></div><button class="tap-zone">Chạm để thả</button>';root.querySelector(".canvas-game").appendChild(canvas);
    var ctx=canvas.getContext("2d"),blocks=[{x:70,w:220,y:480}],moving={x:0,w:220,y:442,dx:2.2*options.difficulty.multiplier},score=0,target=7+Math.min(options.level,5),ended=false,animation;
    function drop(){if(ended)return;var base=blocks[blocks.length-1],left=Math.max(base.x,moving.x),right=Math.min(base.x+base.w,moving.x+moving.w);if(right<=left){ended=true;options.onLose("Khối tháp đã rơi lệch.");return;}moving.x=left;moving.w=right-left;blocks.push({x:moving.x,w:moving.w,y:moving.y});score++;if(score>=target){ended=true;draw();options.onWin("Bạn đã xếp "+target+" tầng.");return;}moving={x:0,w:moving.w,y:moving.y-38,dx:(2.2+score*.12)*options.difficulty.multiplier};}
    function loop(){if(!ended){moving.x+=moving.dx;if(moving.x<0||moving.x+moving.w>360)moving.dx*=-1;}draw();if(!ended)animation=requestAnimationFrame(loop);}
    function draw(){ctx.fillStyle="#f7fbf5";ctx.fillRect(0,0,360,520);ctx.fillStyle="#76a17b";blocks.forEach(function(b,i){ctx.fillStyle=i%2?"#6e9d75":"#8bb28f";ctx.fillRect(b.x,b.y,b.w,32);});ctx.fillStyle="#d7a959";ctx.fillRect(moving.x,moving.y,moving.w,32);ctx.fillStyle="#294a31";ctx.font="600 13px sans-serif";ctx.fillText(score+"/"+target,12,22);}
    root.onpointerdown=function(e){if(e.pointerType!=="mouse"||e.button===0)drop();};options.onHint("Chạm đúng lúc để thả và xếp "+target+" tầng.");loop();
    return {destroy:function(){ended=true;cancelAnimationFrame(animation);root.onpointerdown=null;}};
  }

  window.GameMVP.register("caro-ba", ticTacToe);
  window.GameMVP.register("bon-quan-lien", connectFour);
  window.GameMVP.register("truot-so", slideNumber);
  window.GameMVP.register("do-min", minesweeper);
  window.GameMVP.register("lat-hinh", memoryGame);
  window.GameMVP.register("tranh-truot", slidingPuzzle);
  window.GameMVP.register("ran-san-moi", snakeGame);
  window.GameMVP.register("xep-thap", towerGame);
}());
