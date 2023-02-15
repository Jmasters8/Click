
export default class FallingLeftArrow {
  constructor(game, position, leftArrow, passed) {
    this.image = document.getElementById('fallingDownArrow');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.leftArrow = leftArrow;

    this.game = game;
    this.width = 75
    this.height = 75
    this.passed = passed
    this.position = position

    this.speed = {
      x: 0,
      y: 1.2
    }
    
  }


  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }


  fireDownArrow() {
    if (this.game.gamestate === 0) return null
    if ((this.leftArrow.position.y - this.position.y) < 38 && (this.leftArrow.position.y - this.position.y) > -38) {
      
      this.game.score ++
      this.position.y = -2000
      this.position.x = 2000
    } 
  }

  update(deltaTime) {
    let logged = false
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    
    if (this.position.y > 670 && this.position.y < 680) {
      this.passed = true;
    }
    
  }
}