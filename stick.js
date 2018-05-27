const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position) {
  this.position = position;
  this.origin = new Vector2(500, 10);
  this.rotation = 0;
}

Stick.prototype.update = function () {
  this.updateRotation();
}

Stick.prototype.draw = function () {
  canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN, this.rotation); //draw the stick on canvas
}

//tan(angle) = opposite / adjacent
Stick.prototype.updateRotation = function () {
  let opposite = Mouse.position.y - this.position.y;
  let adjacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite, adjacent); //angle
}