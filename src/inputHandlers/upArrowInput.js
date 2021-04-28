export default class LeftArrowInputHandler {
  constructor(fallingUpArrow) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          event.preventDefault();
          fallingUpArrow.fireUpArrow();
          break;
      }
    })
  }
}