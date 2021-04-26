export default class RightArrow {
  constructor(gameWidth, gameHeight) {
    this.width = 80
    this.height = 80

    this.image = document.getElementById("img_right");

    this.position = {
      x: 800,
      y: 800
    }

  }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}