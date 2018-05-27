function Stick() {
  this.position = new Vector2(400, 400);
  this.origin = new Vector2(500, 10);
}

Stick.prototype.update = function () {

}

Stick.prototype.draw = function () {
  canvas.drawImage(sprites.stick, this.position, this.origin); //draw the stick on canvas
}