let bullets = [];
let enemies = [];
let score = 0;
let incrementSpeed=1;
function setup() {
  createCanvas(600, 600);
  setInterval(incSpeed,20000);
  setInterval(bulletsCreated,200)
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
  textSize(16);
  fill('white')
  text(`score: ${score}`, 25, 25);
  for (let bullet of bullets) {
    bullet.y -= 3;
    fill('rgb(242,247,214)')
    circle(bullet.x, bullet.y, 10);
  }

  for (let enemy of enemies) {
    enemy.y += incrementSpeed;
    fill('rgb(158,158,212)')
    rect(enemy.x, enemy.y, 10);
    if (enemy.y > height) {
      fill('white')
      textSize(24);
      text("YOU LOSE", (width / 2)-70, height / 2+10);
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
function incSpeed()
{
  if(incrementSpeed<4)
    {
     incrementSpeed++; 
    }
  console.log(incrementSpeed);
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
