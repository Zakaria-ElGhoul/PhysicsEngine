  
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let cog, angle;

img = new Image();

img.src = "Images/cog.png";

angle = 0.1;
Yangle = 0.1;

img.addEventListener("load",()=>
{
  setInterval(animate,10);
})


function animate()
{
  context.clearRect(0,0,width,height);

  context.save();
  context.translate(50,150);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  angle += 0.01;

  context.save();
  context.translate(140,150);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  Yangle += -0.01;

  context.save();
  context.translate(230,150);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(210,240);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  
  context.save();
  context.translate(150,310);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(90,380);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(50,465);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(140,465);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(230,465);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(320,465);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(340,375);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(360,285);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(380,195);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(440,130);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(505,195);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(530,285);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(555,375);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(580,465);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(443,290);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(670,465);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(670,375);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(670,285);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
  
  context.save();
  context.translate(670,195);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(670,105);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(760,285);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(805,205);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(810,360);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(830,115);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(830,450);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(920,465);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(945,375);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(970,285);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(995,195);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1060,130);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1200,465);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1175,375);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1150,285);
  context.rotate(angle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1125,195);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();

  context.save();
  context.translate(1060,290);
  context.rotate(Yangle);
  context.drawImage(img,-50,-50,100,100);
  context.restore();
}