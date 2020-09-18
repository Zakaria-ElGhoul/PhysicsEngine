<<<<<<< HEAD
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C,l,m;

A = new Point(200,200,20,"red",true);
B = new Point(600,300,20,"blue",true);
C = new Point(200,500,20,"purple",true);
l = new LinearFunction(-0.5,0);
m = new LinearFunction(1,1);



function animate()
{
  context.clearRect(0,0,width,height)
  A.draw(context);
  B.draw(context);
  C.draw(context);

  l.slope = (B.y - A.y) / (B.x - A.x)
  l.intercept = B.y - B.x * l.slope;
  l.draw(context);

  m.slope = -1 / l.slope;
  m.intercept = C.y - C.x * m.slope;

  m.draw(context);

  
}

setInterval(animate, 10);


=======
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C,l,m;

A = new Point(200,200,20,"red",true);
B = new Point(600,300,20,"blue",true);
C = new Point(200,500,20,"purple",true);
l = new LinearFunction(-0.5,0);
m = new LinearFunction(1,1);



function animate()
{
  context.clearRect(0,0,width,height)
  A.draw(context);
  B.draw(context);
  C.draw(context);

  l.slope = (B.y - A.y) / (B.x - A.x)
  l.intercept = B.y - B.x * l.slope;
  l.draw(context);

  m.slope = -1 / l.slope;
  m.intercept = C.y - C.x * m.slope;

  m.draw(context);

  
}

setInterval(animate, 10);


>>>>>>> 2b64b1abfda69878bff84737786c0c017c3a1bcd
