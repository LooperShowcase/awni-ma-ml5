class Obs {
  constructor() {
    this.size = 100;
    this.x = width + this.size;
    this.y = height - (this.size + 100);
    this.vel = 0;
  }
  show() {
    image(obsimg, this.x, this.y, this.size, this.size);
  }
  move() {
    this.vel = -10;
    this.x += this.vel;
  }
}
