export default class InputHandler {
  constructor(leftArrow) {

    document.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        leftArrow.fire();
      }
      // alert(event.keyCode);
    })
  }
}