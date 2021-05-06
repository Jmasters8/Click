export default class StationaryRightArrowInputHandler {
  constructor(rightArrow, fallingRightArrows, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 39:
          event.preventDefault();
          if (game.isMissed(rightArrow, fallingRightArrows)) game.missed.push('potato')
          break;
      }
    })
  }
}