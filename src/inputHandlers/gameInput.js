export default class GameInputHandler {
  constructor(game) {

    document.addEventListener('keydown', event => {
      let gameScreen = document.getElementById('gameScreen')
      switch (event.keyCode) {
        // case 37:
        //   fallingLeftArrow.fire()
        //   break;
        case 32:
          // game.togglePause();
          event.preventDefault();
          break;
        case 83:
          event.preventDefault();
          if (gameScreen.style.visibility === "visible")
          game.start();
          break;
        // case 27:
        //   event.preventDefault();
        //   game.reset();
      }
    })
  }
}