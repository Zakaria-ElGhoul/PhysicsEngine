const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C,D,f,g,S;

A = new Point(200,200,20,"red",true);
B = new Point(600,300,20,"blue",true);
C = new Point(200,500,20,"green",true);
D = new Point(450,500,20,"purple",true);
f = new LinearFunction(1,1);
g = new LinearFunction(2,1);
S = new Point(0,0,10,"white",false);



function animate()
{
  context.clearRect(0,0,width,height)

  f.slope = (B.y - A.y) / (B.x - A.x);
  g.slope = (C.y - D.y) / (C.x - D.x);

  f.intercept = B.y - B.x * f.slope;
  g.intercept = C.y - C.x * g.slope;

  S.x = f.intersection(g).x;
  S.y = f.intersection(g).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  f.draw(context);
  g.draw(context);
  S.draw(context);

}

setInterval(animate, 10);


