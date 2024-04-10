function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 25;
  this.height = 20;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  var nave = new Image();
  nave.src = "Cohete.png";
  var flama = new Image();
  flama.src = "Flama.png";

  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.drawImage(nave, -nave.width/2, -nave.height/2);

  if (this.showFlame) {
    context.drawImage(flama,-flama.width/2,-flama.height/2);
    //context.beginPath();
    //context.moveTo(-20, -5);
    //context.lineTo(-30, 0);
    //context.lineTo(-20, 5); 
    //context.stroke();
  }

  context.restore();
};
