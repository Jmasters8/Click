export default class LeftArrowInputHandler {
  constructor(fallingLeftArrow) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          fallingLeftArrow.fireLeftArrow();
          break;
      }
    })
  }
}