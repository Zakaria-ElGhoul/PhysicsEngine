const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img_highres, img_lowres, scale,point,coordinate;

img_lowres = new Image();
img_lowres.src = "images/map_lowres.jpg";

img_highres = new Image();
img_highres.src = "images/map_highres.jpg";

scale = img_highres.width / img_lowres.width;
coordinate = {};

point = new Point(400,200,100,"white",true)

setInterval(animate,10)

function animate(){
  coordinate.x = point.x - point.radius;
  coordinate.y = point.y - point.radius;

  context.clearRect(0,0,width,height);
  context.drawImage(img_highres,coordinate.x,coordinate.y,2*point.radius,2*point.radius);
  context.drawImage(img_lowres,0,0);

  //point.draw()
  context.fillRect(coordinate.x,coordinate.y,2*point.radius,2*point.radius);

}