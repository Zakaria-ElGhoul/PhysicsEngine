const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let image, numberOnARow, numberOnAColumn, sx, sy, sw, sh, x, y, w, h, index;


image = new Image();
image.src = "images/cardDeck.png"

numberOnARow = 13;
numberOnAColumn = 5;

index = Math.floor(Math.random() * 52);


image.addEventListener('load',()=>{
  sw = image.width / numberOnARow;
  sh = image.height / numberOnAColumn;
  animate();
})

function animate(){
  sx = (index % numberOnARow) * sw;
  sy = Math.floor(index / numberOnARow) * sh;
  context.drawImage(image, sx, sy, sw, sh, 200, 100, sw, sh);
}