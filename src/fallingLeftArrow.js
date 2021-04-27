import { checkFire } from './checkFire.js'

export default class FallingLeftArrow {
  constructor(game, position, leftArrow) {
    this.image = document.getElementById('img_left');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.leftArrow = leftArrow;

    this.game = game;

    this.width = 60
    this.height = 60

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

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // if (checkFire(this.game.leftArrow, this) ) {
    //   console.log('potato')
    // }
  }

  fire() {
    if ((this.leftArrow.y - this.position.y) < 30 && (this.leftArrow.y - this.position.y) > -30) {
      console.log('success')
    } else {
      console.log('failure')
    }
  }
}