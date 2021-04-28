import UpArrow from '/src/upArrow.js';
import RightArrow from '/src/rightArrow.js';
import LeftArrow from '/src/leftArrow.js';
import DownArrow from '/src/downArrow.js';

import GameInputHandler from '/src//inputHandlers/gameInput.js';
import FallingLeftArrow from '/src/fallingLeftArrow.js';
import FallingUpArrow from '/src/fallingUpArrow.js';
import FallingDownArrow from '/src/fallingDownArrow.js';
import FallingRightArrow from '/src/fallingRightArrow.js';
import LeftArrowInputHandler from '/src/inputHandlers/leftArrowInput.js';
import UpArrowInputHandler from '/src/inputHandlers/upArrowInput.js';
import DownArrowInputHandler from '/src/inputHandlers/downArrowInput.js';
import RightArrowInputHandler from '/src/inputHandlers/rightArrowInput.js';
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
    this.score = 0
    this.gameFrame = 0;
    this.game = this;
    this.gamestate = GAMESTATE.MENU
    
    this.rightArrow = new RightArrow(this);
    this.upArrow = new UpArrow(this);
    this.downArrow = new DownArrow(this);
    this.leftArrow = new LeftArrow(this);

    new GameInputHandler(this);
    
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING
    playAudio()


    let fallingLeftArrows = [
      new FallingLeftArrow(this, {x: 108, y: -150}, this.leftArrow),
      new FallingLeftArrow(this, {x: 108, y: -920}, this.leftArrow)
    ];


    // for (let i = 1; i < 2; i ++) {
    //   fallingLeftArrows.push(new FallingLeftArrow(this, {x: 108, y: i * -150}, this.leftArrow))
    // }
    fallingLeftArrows.forEach(arrow => {
      new LeftArrowInputHandler(arrow)
    })


    let fallingUpArrows = [
      new FallingUpArrow(this, {x: 275, y: -650}, this.upArrow),
      new FallingUpArrow(this, {x: 275, y: -1100}, this.upArrow)
    ];


    // for (let i = 1; i < 2; i++) {
    //   fallingUpArrows.push(new FallingUpArrow(this, {x: 275, y: i * -600}, this.upArrow))
    // }
    fallingUpArrows.forEach(arrow => {
      new UpArrowInputHandler(arrow)
    })


    let fallingDownArrows = [
      new FallingDownArrow(this, {x: 442, y: -500}, this.downArrow)
    ];


    // for (let i = 1; i < 2; i++) {
    //   fallingDownArrows.push(new FallingDownArrow(this, {x: 442, y: i * -500}, this.downArrow))
    // }
    fallingDownArrows.forEach(arrow => {
      new DownArrowInputHandler(arrow)
    })

    let fallingRightArrows = [
      new FallingRightArrow(this, {x: 609, y: -280}, this.rightArrow),
      new FallingRightArrow(this, {x: 609, y: -800}, this.rightArrow),
      new FallingRightArrow(this, {x: 609, y: -1250}, this.rightArrow)
    ];

    // for (let i = 1; i < 2; i++) {
    //   fallingRightArrows.push(new FallingRightArrow(this, {x: 609, y: i * -240}, this.rightArrow))
    // }
    
    fallingRightArrows.forEach(arrow => {
      new RightArrowInputHandler(arrow)
    })









    this.movingObjects = [
      // this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows,
      ...fallingUpArrows,
      ...fallingDownArrows,
      ...fallingRightArrows
    ]

    this.gameObjects = [
      this.rightArrow,
      this.upArrow,
      this.downArrow,
      this.leftArrow,
      // this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows,
      ...fallingUpArrows,
      ...fallingDownArrows,
      ...fallingRightArrows
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
      console.log(this.score)
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      playAudio()
    }
  }

  handleScore(ctx) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.font = '30px Veradana';
    ctx.fillText('Score:', 360, 533);
    ctx.fillText(this.score, 415, 535)
  }

}