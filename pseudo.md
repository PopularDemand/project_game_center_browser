# HTML
 - make big div with border for snake to move in
 - maybe background color, let's not get too crazy

snake head div:  200px 200px

# JS
 - everything run in one interval loop
  - snakes body held in an array
    - snake's head moves in a direction: This is new coordinate is unshifted onto the array
    - when snake eats food, Snake.length increases by one
    - if the length of the array is longer than the snake's length (Snake.length?)
      the last element is popped off (this will happen almost every turn)

    - if the snakes body is help in coordinate pairs,
      the render function paints a div at those coords every interval

  - Body parts are relative to parent container

  ___________________________
  |                          |
  |     T B B H              |  [H, B, B, T] ==> [(x,y), (x,y), (x,y), (x,y)] Relative to the container
  |                          |
  |                          |
  |                          |
  |                          |
  |                          |
  |                          |
  |__________________________|


## Model

- init: generate random food, only head, set head location, direction

- board edges:
    top: 0
    left: 0
    right: width
    bottom: height

- score of game:
    is property, array length

- direction:
    is property, {'up': 50, etc}

- body coordinates:
    is property, array

- movement function
    unshift new coordinates (head) in
    if snake is not at food
      pop off the end (tail)
    else
      eat food

- food eat function
    generate new food coords

- food position
    is property

- random food position
    - generate random coords

- collision check
  - if head exceeds bounds or the head === a body/tail coord: GAME OVER

## View

- game start
- render
  - if not GAME OVER:
  - for each snake coord, generate <div class="snake">, top @ Y, left @ X
  - same for food, but class="food"
- keydown listener
  - jQuery
- game over/restart

## Controller

- callback: output direction value based on what it hears from view.listener (onkey handler)

- init:
  - model.init
  - views.init(callback)
  setInterval
  - | model.move in direction // model.takeTurn
  - | model.collision check
  - view.render