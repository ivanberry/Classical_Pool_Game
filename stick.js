const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOOT_ORIGIN = new Vector2(950, 11);

function Stick(position, onShoot) {
  this.position = position;
  this.origin = STICK_ORIGIN.copy();
  this.rotation = 0;
  this.power = 0;
  this.onShoot = onShoot;
}

Stick.prototype.update = function () {
  if (Mouse.left.down) {
    this.increasePower();
  } else if (this.power> 0) {
    this.shoot();
  }
  this.updateRotation();
}

Stick.prototype.draw = function () {
  canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation); //draw the stick on canvas
}

//tan(angle) = opposite / adjacent
Stick.prototype.updateRotation = function () {
  let opposite = Mouse.position.y - this.position.y;
  let adjacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite, adjacent); //angle
}

Stick.prototype.increasePower = function() {
  this.power += 100;
  this.origin.x += 5;
}

Stick.prototype.shoot = function () {
  this.onShoot(this.power, this.rotation);
  this.power = 0;
  this.origin = STICK_SHOOT_ORIGIN.copy();
}