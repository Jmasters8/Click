export default class UpArrow {
  constructor() {
    this.width = 80
    this.height = 80

    this.image = document.getElementById("upArrow");

    this.position = {
      x: 275,
      y: 613
    }

  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}