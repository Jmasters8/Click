export default class StationaryUpArrowInputHandler {
  constructor(upArrow, fallingUpArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 38:
          event.preventDefault();
          if (game.isMissed(upArrow, fallingUpArrows) && game.gamestate === 1) game.missed.push('potato')
          break;
      }
    })
  }
}