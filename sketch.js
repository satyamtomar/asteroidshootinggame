let bullets = [];
let enemies = [];
let score = 0;
function setup() {
  createCanvas(400, 400);
  
  setInterval(bulletsCreated,250)
  for (let i = 1; i <= 10; i++) {
    let enemy = {
      x: random(10, width - 20),
      y: random(-800, 0),
    };
    enemies.push(enemy);
    
  }
  
}
function draw() {
  background('rgb(241,146,241)');
  rectMode(CENTER);
  fill('#9EA0C1')
  triangle(mouseX-20,height-30,mouseX, height - 50, mouseX+20,height-30);
  text(`score: ${score}`, 20, 20);
  for (let bullet of bullets) {
    bullet.y -= 3;
    fill('rgb(242,247,214)')
    circle(bullet.x, bullet.y, 10);
  }

  for (let enemy of enemies) {
    enemy.y += 1;
    fill('rgb(158,158,212)')
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
function bulletsCreated()
{
  
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}
// function mousePressed() {
//   // console.log('hi')
//   let bullet = {
//     x: mouseX,
//     y: height - 50,
//   };
//   bullets.push(bullet);
// }
