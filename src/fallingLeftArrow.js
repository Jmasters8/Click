export default class FallingLeftArrow {
  constructor(game) {
    this.image = document.getElementById('img_left');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.width = 60
    this.height = 60

    this.reset();
  }

  reset() {
    this.position = {
      x: 128,
      y: -20
    }

    this.speed = {
      x: 0,
      y: 2
    }
  }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}