export default class LeftArrowInputHandler {
  constructor(fallingRightArrow) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 39:
          event.preventDefault();
          fallingRightArrow.fireRightArrow();
          break;
      }
    })
  }
}