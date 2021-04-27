import UpArrow from '/src/upArrow.js';
import RightArrow from '/src/rightArrow.js';
import LeftArrow from '/src/leftArrow.js';
import DownArrow from '/src/downArrow.js';
import InputHandler from '/src/input.js';
import FallingLeftArrow from '/src/fallingLeftArrow.js'
import { checkFire } from './checkFire.js'

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

export default class Game {

  constructor(gameWidth, gameHeight) {
    // this.image = document.getElementById('img_left');
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];

    this.gameFrame = 0;

    this.gamestate = GAMESTATE.MENU

    this.rightArrow = new RightArrow(this);
    this.upArrow = new UpArrow(this);
    this.downArrow = new DownArrow(this);
    // this.fallingLeftArrows = [];
    this.leftArrow = new LeftArrow(this);
    this.fallingLeftArrow = new FallingLeftArrow(this, {x: 128, y:-20}, this.leftArrow);

  

    // new InputHandler(this.fallingLeftArrow, this);

  }

  start() {
    this.gamestate = GAMESTATE.RUNNING
    playAudio()
    // let arrow = new FallingLeftArrow(this, {x: 128, y: 300})

    

    let fallingLeftArrows = [];

    for (let i = 0; i < 30; i ++) {
      fallingLeftArrows.push(new FallingLeftArrow(this, {x: 128, y: i * -300}))
    }


    this.movingObjects = [
      this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows
    ]

    this.gameObjects = [
      this.rightArrow,
      this.upArrow,
      this.downArrow,
      this.leftArrow,
      this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows
    ]
  }


  update(deltaTime) {

    if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) return;

    this.movingObjects.forEach(object => {
      object.update(deltaTime)
    })

    // this.fallingLeftArrow.update(deltaTime)
    // this.updateFallingLeftArrows(deltaTime)
  }

  // drawFallingLeftArrow(ctx) {
  //   this.fallingLeftArrow.draw(ctx);
  // }

  // drawFallingLeftArrows(ctx) {
  //   if (this.gameFrame % 50 === 0) {
  //     this.leftArrows.push(new FallingLeftArrow(this))
  //     console.log(this.leftArrows.length)
  //   }
  //   for (let i = 0; i < this.leftArrows.length; i++) {
  //     this.leftArrows[i].draw(ctx);
  //   }
  // }

  // updateFallingLeftArrows(deltaTime) {
  //   if (this.gameFrame % 120 === 0) {
  //     this.leftArrows.push(new FallingLeftArrow(this))
  //     console.log(this.leftArrows.length)
  //   }
  //   for (let i = 0; i < this.leftArrows.length; i++) {
  //     this.leftArrows[i].update(deltaTime);
  //   }
  // }

  draw(ctx) {
    // this.fallingLeftArrow.draw(ctx);
    // this.rightArrow.draw(ctx);
    // this.upArrow.draw(ctx);
    // this.leftArrow.draw(ctx);
    // this.downArrow.draw(ctx);
    // this.fallingLeftArrow.draw(ctx);

    this.gameObjects.forEach(object => {
      object.draw(ctx)
    })

    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACEBAR to Start", this.gameWidth / 2, this.gameHeight / 2)
    }

    
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING
      playAudio()
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      playAudio()
    }
  }

}