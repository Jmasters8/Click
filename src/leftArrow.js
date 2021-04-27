export default class LeftArrow {
  constructor(game) {
    this.width = 60
    this.height = 60
    this.fallingLeftArrow = fallingLeftArrow
    // this.fallingLeftArrowArr = fallingLeftArrowArr
    this.image = document.getElementById("img_left");

    this.position = {
      x: 128,
      y: 813
    }

    
  }

  // fire() {
  //   // console.log(this.fallingLeftArrowArr)
  //   // for (let i = 0; i < this.fallingLeftArrowArr.length; i++) {
  //   //   if ((this.position.y - this.fallingLeftArrowArr[i].position.y) < 30 && (this.position.y - this.fallingLeftArrowArr[i].position.y) > -30) {
  //   //     console.log('success')
  //   //   } else {
  //   //     console.log('failure')
  //   //   }
  //   // }
  //   console.log(this.position)
  //   console.log(this.fallingLeftArrow.position)
  //   if ((this.position.y - this.fallingLeftArrow.position.y) < 30 && (this.position.y - this.fallingLeftArrow.position.y) > -30) {
  //     console.log('success')
  //   } else {
  //     console.log('failure')
  //   }
  // }

  draw(ctx) {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}