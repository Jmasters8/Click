
export default class FallingLeftArrow {
  constructor(game, position, leftArrow) {
    this.image = document.getElementById('fallingLeftArrow');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.leftArrow = leftArrow;

    this.game = game;
    this.width = 75
    this.height = 75
    this.passed = false
    this.position = position

    this.speed = {
      x: 0,
      y: 2
    }

  }


  draw(ctx) {

    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  fireLeftArrow() {
    if (this.game.gamestate === 0) return null
    if ((this.leftArrow.position.y - this.position.y) < 38 && (this.leftArrow.position.y - this.position.y) > -38) {
      this.game.score += 1
      this.position.y = 2000
      this.position.x = 2000
    } else {
      // console.log('failure')
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.y === 670) {
      this.passed = true;
    }
  }

  handleMissed() {
    if (this.position.y === 652) {
      this.game.missed ++
      console.log('goodbye')
    }
    console.log('hello')
  }
}