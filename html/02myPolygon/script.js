const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

for(let i = 0; i < 3; i++){
  let x = getRandomInt(0,width);
  let y = getRandomInt(0,height);
  let r = getRandomInt(0,255);
  let g = getRandomInt(0,255);
  let b = getRandomInt(0,255);
  let color = "rgb(" + r + ',' + g + "," + b + ")";
  let myPoint = new Point(x, y, 5,color, i);
  points.push(myPoint);
  
}

let myPolygon = new Polygon(points);
myPolygon.draw(context);
	


