import { checkFire } from './checkFire.js'

export default class FallingLeftArrow {
  constructor(game, position, leftArrow) {
    this.image = document.getElementById('fallingDownArrow');

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


  fireDownArrow() {
    if ((this.leftArrow.position.y - this.position.y) < 30 && (this.leftArrow.position.y - this.position.y) > -30) {
      // console.log(this.leftArrow.position.y - this.position.y)
      console.log('success')
      this.game.score ++
    } else {
      // console.log('failure')
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.score = this.score
    // if (checkFire(this.game.leftArrow, this) ) {
    //   console.log('potato')
    // }
  }
}