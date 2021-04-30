import { checkFire } from './checkFire.js'

export default class FallingLeftArrow {
  constructor(game, position, leftArrow) {
    this.image = document.getElementById('fallingLeftArrow');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.leftArrow = leftArrow;

    this.game = game;
    this.width = 75
    this.height = 75

    // this.position = {
    //   x: 128,
    //   y: -20
    // }

    this.position = position

    this.speed = {
      x: 0,
      y: 2
    }
    // this.reset();

  }

  // reset() {
  //   this.position = {
  //     x: 128,
  //     y: -20
  //   }

  //   this.speed = {
  //     x: 0,
  //     y: 2
  //   }
  // }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }


  fireLeftArrow() {
    if ((this.leftArrow.position.y - this.position.y) < 38 && (this.leftArrow.position.y - this.position.y) > -38) {
      // console.log(this.leftArrow.position.y - this.position.y)
      console.log('success')
      this.game.score ++
      this.position.y = 2000
    } else {
      // this.game.score -= 1
      // console.log('failure')
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    // if (checkFire(this.game.leftArrow, this) ) {
    //   console.log('potato')
    // }
  }

  handleMissed() {
    if (this.position.y === 652) {
      this.game.missed ++
      console.log('goodbye')
    }
    console.log('hello')
  }
}