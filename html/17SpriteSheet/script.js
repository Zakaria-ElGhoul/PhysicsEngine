const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let sw, sh, sx, sy, x, y, w, h;
let RunningCat, index, xspeed;


RunningCat = new Image();
RunningCat.src = "images/runningcat.png";
index = 0;
xspeed = 50;

RunningCat.addEventListener('load',()=>
{
    sw = RunningCat.width/2;
    sh = RunningCat.height/4;
    x = 100;
    y = 100;
    setInterval(animate, 60);
})

function animate()
{
    sx = index % 2 * sw;
    sy = Math.floor(index/2) * sh;
    w = sw;
    h = sh;

    context.clearRect(0, 0, width, height);
    context.drawImage(RunningCat, sx, sy, sw, sh, x, y, w, h);
    index++;
    if (index > 7)
    {
        index = 0;
    }
    x += xspeed;
    if (x > width)
    {
        x = -sw;
    }
}