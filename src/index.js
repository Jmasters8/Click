import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// let text = document.getElementById("text");
// let ctxText = text.getContext("2d");
// ctxText.font = "15px Arial";
// ctxText.fillText("Hello World", 0, 50);


const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;
let score = 2;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, score)

// let rightArrow = new RightArrow(GAME_WIDTH, GAME_HEIGHT);
// let upArrow = new UpArrow(GAME_WIDTH, GAME_HEIGHT);
// let downArrow = new DownArrow(GAME_WIDTH, GAME_HEIGHT);
// let fallingLeftArrow = new FallingLeftArrow(GAME_WIDTH, GAME_HEIGHT);
// let leftArrow = new LeftArrow(GAME_WIDTH, GAME_HEIGHT, fallingLeftArrow);

// new InputHandler(leftArrow);

//images
let imgRightArrow = document.getElementById('img_left')
let lastTime = 0;


// rightArrow.draw(ctx);
// upArrow.draw(ctx);
// leftArrow.draw(ctx);
// downArrow.draw(ctx);


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // let updateGame = () => {
  //   game.update(deltaTime);
  // }

  // let drawGame = () => {
  //   game.draw(ctx);
  // }

  // setInterval(updateGame, 5000)
  // setInterval(drawGame, 5000)
  game.update(deltaTime);
  game.draw(ctx);
  game.handleScore(ctx)
  // game.drawFallingLeftArrow(ctx)
  
  // setTimeout(game.update(deltaTime), 6000)
  // setTimeout(game.draw(ctx), 6000)

  // rightArrow.draw(ctx);
  // upArrow.draw(ctx);
  // leftArrow.draw(ctx);
  // downArrow.draw(ctx);
  // fallingLeftArrow.update(deltaTime)
  // fallingLeftArrow.draw(ctx);


  requestAnimationFrame(gameLoop);
}

(requestAnimationFrame(gameLoop));