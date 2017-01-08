snake.view = {
  init: function(callbacks) {
    $(document).keypress(callbacks.changeDirection);
    $('#play-button').click(function(e) {
      $(e.target).hide();
      callbacks.startGame();
    })
  },

  render: function(snakeCoords, foodPosition) {
    // Within forEach, `this` is window
    var self = this;

    self.clearBoard();
    snakeCoords.forEach(function(segmentCoord) {
      self.paintDiv(segmentCoord, 'snake')
    });
    self.paintDiv(foodPosition, 'food');
  },

  gameOver: function(score) {
    $('.boardBlock').remove();
    $('<h1>').text('game over').appendTo($('#board'));
    $('<p>').text('your final score was: ' + score).appendTo($('#board'));
    $('#play-button').show();
  },

  // Helpers
  paintDiv: function(coordinates, divClass) {
    console.log(divClass + ' paintdiv coordinates: ' + coordinates);
    var x = coordinates[0];
    var y = coordinates[1];
    var $newDiv = $('<div>').addClass(divClass).addClass('boardBlock').css({ top: y, left: x });
    $newDiv.appendTo('#board');
  },

  clearBoard: function() {
    console.log('clearing board')
    $('.boardBlock').remove();
  }
}