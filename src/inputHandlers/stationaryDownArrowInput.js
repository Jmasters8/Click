export default class StationaryDownArrowInputHandler {
  constructor(downArrow, fallingDownArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 40:
          event.preventDefault();
          if (game.isMissed(downArrow, fallingDownArrows) && game.gamestate === 1) game.missed.push('potato')
          break;
      }
    })
  }
}