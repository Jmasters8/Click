# Click

Click is a JavaScript game where you can flex your key pressing muscles! Based on the classic game, Dance Dance Revolution, Click consists of falling arrows that match the beat to a song, and must be pressed at the correct time. For every correct arrow key pressed at the right time, you gain a point. 

[Click to play!](https://jmasters8.github.io/Click/)

## Technologies
 - Vanilla JavaScript to take care of all gameplay functionality
 - Canvas to handle rendering of graphics

## Functionality

### Collision Detection + Keydown Event Listeners
Utilized collision detection functions using position and speed, as well as using keydown event listeners, to detect when a player pressed the key at the correct time. 

```javascript
//fallingRightArrow.js
this.position = position
this.speed = {
  x: 0,
  y: 2
}

fireRightArrow() {
    if ((this.rightArrow.position.y - this.position.y) < 38 && 
       (this.rightArrow.position.y - this.position.y) > -38) {
       this.game.score ++
       this.position.y = 2000
    } else {
       this.game.score --
    }
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
```
```javascript
//rightArrowInput.js
document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 39:
          event.preventDefault();
          fallingRightArrow.fireRightArrow();
          break;
      }
    })
```
