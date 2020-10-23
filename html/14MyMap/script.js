const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img_highres, img_lowres, scale,point,coordinate, scaleX, scaleY;

img_lowres = new Image();
img_lowres.src = "images/map_lowres.jpg";
img_highres = new Image();
img_highres.src = "images/map_highres.jpg";

let mouseX = 0;
let mouseY = 0;
let radius = 200;

scale = img_highres.width / img_lowres.width;

point = {};
point.radius = 200;
point.x = 0;
point.y = 0;

coordinate = {};

setInterval(animate,10)
function animate(){
  scaleX = img_highres.width/img_lowres.width;
  scaleY = img_highres.height/img_lowres.width;

  coordinate.x = point.x - radius;
  coordinate.y = point.y - radius;

  context.clearRect(0,0,width,height);
  //drawImage(img,sx,sy,sw,sh,x,y,w,h)

  context.drawImage(img_lowres,0,0);

  //point.draw()
  //context.fillRect(point.x - (point.radius /2 ), point.y -(point.radius /2 ), point.radius + (point.radius *2 ), point.radius + (point.radius *2 ));
  context.drawImage(img_highres, point.x * scaleX, point.y * scaleY, point.radius/2, point.radius/2, point.x - point.radius/2, point.y - point.radius/2, point.radius, point.radius);
}


document.addEventListener("mousemove", function (e) {
    point.x = e.pageX;
    point.y = e.pageY;
});