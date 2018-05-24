function Stick() {
  this.position = { x: 0, y: 400 };
}

Stick.prototype.update = function() {

  //Testing
  this.position = Mouse.position;

  if (Mouse.left.pressed) {
    console.log('Left Pressed');
  }
}

Stick.prototype.draw = function() {
  canvas.drawImage(sprites.stick, this.position);
}