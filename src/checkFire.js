export function checkFire(arrow, fallingArrow) {
  let arrowPosition = arrow.position.y
  let fallingArrowPosition = fallingArrow.position.y

  if (arrowPosition - fallingArrowPosition < 30 && arrowPosition - fallingArrowPosition > -30) {
    return true
  } else {
    return false
  }
}