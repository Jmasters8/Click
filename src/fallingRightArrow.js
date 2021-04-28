import { checkFire } from './checkFire.js'

export default class FallingLeftArrow {
  constructor(game, position, rightArrow) {
    this.image = document.getElementById('fallingRightArrow');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.rightArrow = rightArrow;

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


  fireRightArrow() {
    if ((this.rightArrow.position.y - this.position.y) < 38 && (this.rightArrow.position.y - this.position.y) > -38) {
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