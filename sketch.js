let bullets = [];
let enemies = [];
let score = 0;
function setup() {
  createCanvas(400, 400);
  // setInterval(bulletsUsed,500)
  for (let i = 1; i <= 10; i++) {
    let enemy = {
      x: random(10, width - 20),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }
}
function draw() {
  background(100);
  rectMode(CENTER);
  circle(mouseX, height - 50, 25);
  text(`score: ${score}`, 20, 20);
  for (let bullet of bullets) {
    bullet.y -= 3;
    circle(bullet.x, bullet.y, 10);
  }

  for (let enemy of enemies) {
    enemy.y += 2;
    rect(enemy.x, enemy.y, 10);
    if (enemy.y > height) {
      text("YOU LOSE", width / 2, height / 2);
      noLoop();
    }
  }

  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        // console.log(dist(enemy.x, enemy.y, bullet.x, bullet.y));

        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        newEnemy();
        score++;
      }
    }
  }
}
function newEnemy() {
  let enemy = {
    x: random(10, width - 20),
    y: random(-800, 0),
  };
  enemies.push(enemy);
}
function mousePressed() {
  // console.log('hi')
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}
