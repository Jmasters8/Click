import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;
let score = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
let lastTime = 0;
let playAgain = document.getElementById("play-again")
let audioOn = false

document.addEventListener("keydown", e => {
  let gameScreen = document.getElementById('gameScreen')
  if (e.keyCode === 27) {
    audioOn = false
    game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
    stopAudio()
  }

  if (e.keyCode === 83 && gameScreen.style.visibility === "visible") {
    if (audioOn === true) return null
    playAudio()
    audioOn = true
  }

})

document.addEventListener("click", e => {
  let ele = document.getElementById("Enter")
  if (e.target === ele && ele.innerHTML === "Enter") {
    game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
    stopAudio()
    audioOn = false
  }
})


playAgain.addEventListener("mousedown", e => {
  game = new Game(GAME_WIDTH, GAME_HEIGHT, score)
  audioOn = false;
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