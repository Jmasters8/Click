export default class StationaryLeftArrowInputHandler {
  constructor(leftArrow, fallingLeftArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          if (game.isMissed(leftArrow, fallingLeftArrows) && game.gamestate === 1) game.missed.push('potato')
          break;
      }
    })
  }
}