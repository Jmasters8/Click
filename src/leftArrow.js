export default class LeftArrow {
  constructor(game) {
    this.width = 80
    this.height = 80
    this.image = document.getElementById("leftArrow");

    this.position = {
      x: 108,
      y: 613
    }

    
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}