export default class GameInputHandler {
  constructor(game) {

    document.addEventListener('keydown', event => {
      let gameScreen = document.getElementById('gameScreen')
      switch (event.keyCode) {
        case 32:
          event.preventDefault();
          break;
        case 83:
          event.preventDefault();
          if (gameScreen.style.visibility === "visible")
          game.start();
          break;
      }
    })
  }
}