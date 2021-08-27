let playerimg;
let obsimg;
let back;
let obstecles = [];
let sc = 0;
function preload() {
  back = loadImage("background.jpg");
  obsimg = loadImage("obstecle.png");
  playerimg = loadImage("player.gif");
}
let player1;
let obs1;
function setup() {
  createCanvas(1280, 720);
  player1 = new Player1();
}
function keyPressed() {
  if (key === " ") {
    player1.jump();
  }
}

function draw() {
  background(back);
  player1.show();

  if (random(1) < 0.01) {
    obstecles.push(new Obs());
  }

  for (let obs of obstecles) {
    obs.show();
    obs.move();
    if (player1.collided(obs) === true) {
      console.log("Game Over !!");
      noLoop();
      textSize(70);
      text("Game Over !!", 350, 350);
    } else {
      sc += 10;
    }
  }

  textSize(32);
  fill(0, 102, 153);
  text("Your score is : " + sc, 450, 30);

  player1.move();
}
