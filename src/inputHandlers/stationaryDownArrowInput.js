export default class StationaryDownArrowInputHandler {
  constructor(downArrow, fallingDownArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 40:
          event.preventDefault();
          if (game.isMissed(downArrow, fallingDownArrows)) game.missed.push('potato')
          break;
      }
    })
  }
}