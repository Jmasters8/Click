export default class RightArrow {
  constructor() {
    this.width = 80
    this.height = 80

    this.image = document.getElementById("rightArrow");

    this.position = {
      x: 609,
      y: 613
    }

  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}