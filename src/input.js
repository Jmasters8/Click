import { checkFire } from './checkFire.js'

export default class InputHandler {
  constructor(fallingLeftArrow, game) {

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          fallingLeftArrow.fire()
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          event.preventDefault()
          game.start();
          break;
      }
    })
  }
}