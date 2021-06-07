export default class GameInputHandler {
  constructor(game) {

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        // case 37:
        //   fallingLeftArrow.fire()
        //   break;
        // case 32:
        //   game.togglePause();
        //   break;
        case 83:
          event.preventDefault();
          game.start();
          break;
        // case 27:
        //   event.preventDefault();
        //   game.reset();
      }
    })
  }
}