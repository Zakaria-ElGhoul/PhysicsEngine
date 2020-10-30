const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

//#region green tank
greenTank = {};
greenTank.animationArray = [1,2,3,4,5,6,7,8];
greenTank.index = 0;

greenTank.x = 100;
greenTank.y = 100;

greenTank.vx = 0;
greenTank.vy = 0;
greenTank.direction = 0;
greenTank.update = function()
{
greenTank.x += greenTank.vx;
greenTank.y += greenTank.vy;
  if(greenTank.y < 0)
  {
  greenTank.y = height;
  }
}
greenTank.draw = function()
{
  greenTank.sx = greenTank.animationArray[greenTank.index] % 8 * 84;
  greenTank.sy = Math.floor(greenTank.animationArray[greenTank.index] / 8) *84;
  context.save();
  context.translate(greenTank.x, greenTank.y);
  context.rotate(greenTank.direction);
  context.drawImage(spriteSheet, greenTank.sx ,greenTank.sy, 84, 84, -42, -42, 84, 84);
  context.restore();
}
//#endregion
//#region blue tank
blueTank = {};
blueTank.animationArray = [9,10,11,12,13,14,15,16];
blueTank.index = 0;

blueTank.x = 200;
blueTank.y = 100;

blueTank.vx = 0;
blueTank.vy = 0;
blueTank.direction = 0;

blueTank.update = function()
{
  blueTank.x += blueTank.vx;
  blueTank.y += blueTank.vy;
  if(blueTank.y < 0)
  {
    blueTank.y = height;
  }
}
blueTank.draw = function()
{
  blueTank.sx = blueTank.animationArray[blueTank.index] % 8 * 84;
  blueTank.sy = Math.floor(blueTank.animationArray[blueTank.index] / 8) *84;
  context.save();
  context.translate(blueTank.x, blueTank.y);
  context.rotate(blueTank.direction);
  context.drawImage(spriteSheet, blueTank.sx ,blueTank.sy, 84, 84, -42, -42, 84, 84);
  context.restore();
}
//#endregion
//#region events
addEventListener('keydown',(e)=>
{
  switch(e.key) {
    case "ArrowRight":
      greenTank.vx = 10;
      greenTank.vy = 0;
      greenTank.direction = 0.5 * Math.PI;
      break;
    case "ArrowLeft":
      greenTank.vx = -10;
      greenTank.vy = 0;
      greenTank.direction = 1.5 * Math.PI;
      break;
    case "ArrowUp":
      greenTank.vy = -10;
      greenTank.vx = 0;
      greenTank.direction = 0;
      break;
    case "ArrowDown":
      greenTank.vy = 10;
      greenTank.vx = 0;
      greenTank.direction = Math.PI;
      break;
    case "w":
        blueTank.vy = -10;
        blueTank.vx = 0;
        blueTank.direction = 0;
        break;
    case "s":
      blueTank.vy = 10;
      blueTank.vx = 0;
      blueTank.direction = Math.PI;
      break;
    case "a":
      blueTank.vx = -10;
      blueTank.vy = 0;
      blueTank.direction = 1.5 * Math.PI;
      break;
    case "d":
      blueTank.vx = 10;
      blueTank.vy = 0;
      blueTank.direction = 0.5 * Math.PI;
      break;
    default:
      greenTank.vy = 0;
      greenTank.vx = 0;
      blueTank.vy = 0;
      blueTank.vx = 0;
  }
})

spriteSheet.addEventListener("load",()=>{
sw = spriteSheet.width / 8;
sh = spriteSheet.height / 4;
setInterval(animate, 100);
})
//#endregion

function animate()
{
  context.clearRect(0,0,width,height);
  greenTank.update();
  greenTank.draw(100,100);
  greenTank.index += 1;

  blueTank.update();
  blueTank.draw();
  blueTank.index += 1;
  if(blueTank.index >= blueTank.animationArray.length || greenTank.index >= greenTank.animationArray.length)
  {
    blueTank.index = 0;
    greenTank.index = 0;
  }
}