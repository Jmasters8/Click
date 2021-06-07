import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;
let score = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
let lastTime = 0;
let playAgain = document.getElementById("play-again")

document.addEventListener("keydown", e => {
  if (e.keyCode === 27) {
    console.log("reset")
    game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
    stopAudio()
  }
  if (e.keyCode === 83) {
    playAudio()
  }

  // if (e.keyCode === 32) {
  //   playAudio()
  // }

  // if (e.keyCode === 83) {
  //   game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
  // }
})


playAgain.addEventListener("mousedown", e => {
  game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
})


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);


  game.update(deltaTime);
  game.draw(ctx);
  game.handleScore(ctx)


  requestAnimationFrame(gameLoop);
}

(requestAnimationFrame(gameLoop));