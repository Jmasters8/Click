export default class StationaryLeftArrowInputHandler {
  constructor(leftArrow, fallingLeftArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          event.preventDefault();
          if (game.isMissed(leftArrow, fallingLeftArrows)) game.missed.push('potato')
          break;
      }
    })
  }
}