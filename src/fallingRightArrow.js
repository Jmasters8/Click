export default class FallingLeftArrow {
  constructor(game, position, rightArrow) {
    this.image = document.getElementById('fallingRightArrow');

    this.rightArrow = rightArrow;

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

  fireRightArrow() {
    if (this.game.gamestate === 0) return null
    if ((this.rightArrow.position.y - this.position.y) < 38 && (this.rightArrow.position.y - this.position.y) > -38) {
      this.game.score ++
      this.position.y = 2000
      this.position.x = 2000
    } else {
      
    }
  }

  update(deltaTime) {
    this.passed = false;
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    
    if (this.position.y === 670) {
      this.passed = true;
    }
  }
}