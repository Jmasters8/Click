export default class DownArrow {
  constructor(gameWidth, gameHeight) {
    this.width = 80
    this.height = 80

    this.image = document.getElementById("downArrow");

    // this.position = {
    //   x: 560,
    //   y: 800
    // }
    this.position = {
      x: 442,
      y: 613
    }

  }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    
  }
}