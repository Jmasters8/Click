export default class LeftArrowInputHandler {
  constructor(fallingDownArrow) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 40:
          event.preventDefault();
          fallingDownArrow.fireDownArrow();
          break;
      }
    })
  }
}