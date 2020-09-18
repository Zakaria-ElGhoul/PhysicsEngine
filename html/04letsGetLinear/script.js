<<<<<<< HEAD
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myLine = new LinearFunction(-0.5,500);

let A = new Point(100,100,20,"blue",true);
let B = new Point(500,200,20,"green",true);   


function animate()
{
  context.clearRect(0,0,width,height)

  A.draw(context);
  B.draw(context);
  myLine.slope = (B.y - A.y)/(B.x -A.x);
  myLine.intercept = B.y - myLine.slope * B.x;

  myLine.draw(context);
}

setInterval(animate, 10);


=======
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myLine = new LinearFunction(-0.5,500);

let A = new Point(100,100,20,"blue",true);
let B = new Point(500,200,20,"green",true);   


function animate()
{
  context.clearRect(0,0,width,height)

  A.draw(context);
  B.draw(context);
  myLine.slope = (B.y - A.y)/(B.x -A.x);
  myLine.intercept = B.y - myLine.slope * B.x;

  myLine.draw(context);
}

setInterval(animate, 10);


>>>>>>> 2b64b1abfda69878bff84737786c0c017c3a1bcd
