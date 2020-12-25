function setup() {
  createCanvas(400, 400);
}

createNewEnemy = (x, y, size = 30) => {
  
}

let px = 100
let py = 300
let pv = 0;

let bv = -7;

let ex = 60;
let ey = 30;
let goingRight = true;
const ev = 2;

let bullet = undefined;
let isEnemy = true;
const enemySize = 30;

function draw() {
  background(220);

  if (goingRight) {
    ex = ex + ev;
    if (ex > 300) {
      goingRight = false;
    }
  } else {
    ex = ex - ev
    if (ex < 50) {
      goingRight = true;
    }
  }

  if (isEnemy) {
    circle(ex, ey, enemySize)
  }

  px = px + pv;

  square(px, py, 20)

  if (bullet) {
    bullet.y = bullet.y + bv;
    circle(bullet.x, bullet.y, 6);

    doesBulletStrike(bullet, ex, ey)

    if (bullet.y < 0) {
      bullet = undefined;
    }
  }
}

function doesBulletStrike(bullet, x, y) {
  if (x - enemySize/2 < bullet.x && bullet.x < x + enemySize/2) {
    if (y - enemySize/2 < bullet.y && bullet.y < y + enemySize/2) {
      isEnemy = false;
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pv = -2;
  } else if (keyCode === RIGHT_ARROW) {
    pv = 2;
  } else if (keyCode === UP_ARROW) {
    console.log("up arrow pressed")
    bullet = {
      x: px,
      y: py
    }
  }
}

function keyReleased() {
  pv = 0;
}