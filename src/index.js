import UpArrow from '/src/upArrow.js';
import RightArrow from '/src/rightArrow.js';
import LeftArrow from '/src/leftArrow.js';
import DownArrow from '/src/downArrow.js';
import InputHandler from '/src/input.js';
import FallingLeftArrow from '/src/fallingLeftArrow.js'

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

let text = document.getElementById("text");
let ctxText = text.getContext("2d");
ctxText.font = "15px Arial";
ctxText.fillText("Hello World", 0, 50);


const GAME_WIDTH = 1000;
const GAME_HEIGHT = 1000;


let rightArrow = new RightArrow(GAME_WIDTH, GAME_HEIGHT);
let upArrow = new UpArrow(GAME_WIDTH, GAME_HEIGHT);
let downArrow = new DownArrow(GAME_WIDTH, GAME_HEIGHT);
let fallingLeftArrow = new FallingLeftArrow(GAME_WIDTH, GAME_HEIGHT);
let leftArrow = new LeftArrow(GAME_WIDTH, GAME_HEIGHT, fallingLeftArrow);

new InputHandler(leftArrow);

//images
let imgRightArrow = document.getElementById('img_left')
let lastTime = 0;

rightArrow.draw(ctx);
upArrow.draw(ctx);
leftArrow.draw(ctx);
downArrow.draw(ctx);


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  rightArrow.draw(ctx);
  upArrow.draw(ctx);
  leftArrow.draw(ctx);
  downArrow.draw(ctx);
  fallingLeftArrow.update(deltaTime)
  fallingLeftArrow.draw(ctx);


  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);