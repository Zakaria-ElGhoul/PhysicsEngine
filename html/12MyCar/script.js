const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let car, wheel, background;

car ={};
car.image = new Image();
car.image.src = "images/car.png"
car.pos = 0;
car.speed = 2;

wheels = {};
wheels.backWheel = new Image()
wheels.backWheel.src = "images/wheel.png";
wheels.frontWheel = new Image()
wheels.frontWheel.src = "images/wheel.png";

wheels.angle = 0;

background = {};
background.img = new Image();
background.img.src = "images/BC.jpg"

addEventListener('keydown',(e)=>
{
  switch(e.key) {
    case "ArrowRight":
      car.speed += 0.05;
      break;
    case "ArrowLeft":
      car.speed -= 0.05;
      break;
  }
})

car.image.addEventListener('load',()=>
{
  setInterval(animate,10)
})

function animate(){
  context.clearRect(0,0,width,height);
  context.drawImage(background.img, 0, 0);

  context.drawImage(car.image,car.pos,500);
  

  context.save()
  context.translate(car.pos + 213,700)
  context.rotate(wheels.angle);
  context.drawImage(wheels.backWheel,-wheels.backWheel.width/2,-wheels.backWheel.height/2)
  context.restore()

  context.save()
  context.translate(car.pos + 753,700)
  context.rotate(wheels.angle);
  context.drawImage(wheels.frontWheel,-wheels.frontWheel.width/2,-wheels.frontWheel.height/2)
  context.restore()


  car.pos += car.speed;

  if(car.pos > width)
  {
    car.pos = -car.image.width
  }

  if(car.pos < -car.image.width)
  {
    car.pos = width;
  }

  wheels.angle += car.speed / (0.5*wheels.backWheel.width);
}