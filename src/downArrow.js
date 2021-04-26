export default class DownArrow {
  constructor(gameWidth, gameHeight) {
    this.width = 82
    this.height = 82

    this.image = document.getElementById("img_down");

    this.position = {
      x: 560,
      // y: gameHeight - this.height - 50
      y: 800
    }

  }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    
  }
}