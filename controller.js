snake.controller = {
  init: function() {
    snake.model.init();
    snake.view.init(this.callbacks);
  },

  loop: function() {
    // Reference the snake obj because called
    // in setInterval -- `this` is window
    snake.model.takeTurn();
    if (snake.model.checkGameOver()) {
      snake.controller.gamesOver();
    } else {
      snake.controller.nextFrame();
    }
  },

  runLoop: function() {
    this.gameLoop = setInterval(this.loop, 700);
  },

  callbacks: {
    changeDirection: function(e) {
      var direction;
      console.log(e.which)
      if (e.keyCode === 38) {
       direction = 'up';
      } else if (e.keyCode === 40) {
       direction = 'down';
      } else if (e.keyCode === 37) {
       direction = 'left';
      } else if(e.keyCode === 39) {
       direction = 'right';
      }
      console.log('now moving: ' + (direction));
      snake.model.direction = direction;
    },
    startGame: function() {
      snake.controller.runLoop();
    }
  },

  // Helpers
  gamesOver: function() {
    snake.view.gameOver(snake.model.score);
    snake.model.reset();
    clearInterval(this.gameLoop)
  },

  nextFrame: function() {
    var snakeCoords = snake.model.getSnake();
    var foodPosition = snake.model.getFood();
    snake.view.render(snakeCoords, foodPosition);
  }
}