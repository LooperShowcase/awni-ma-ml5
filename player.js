class Player1 {
  constructor() {
    this.size = 350;
    this.x = 50;
    this.y = height - this.size;
    this.Velosity = 0;
    this.gravity = 0.7;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y === height - this.size) {
      this.Velosity = -18;
    }
  }
  move() {
    this.y += this.Velosity;
    this.Velosity += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 150,
      this.size - 150,

      currentObs.x,
      currentObs.y,
      currentObs.size - 20,
      currentObs.size - 20
    );
    return isColliding;
  }
}
