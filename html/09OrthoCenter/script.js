const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//Begin hier
let A,B,C;
let ab,bc,ca;
let AB ,BC,AC;

A = new Point(100,100,15,"red",true);
B = new Point(600,150,15,"green",true);
C = new Point(300,300,15,"blue", true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ac = new LinearFunction(1,1);

AB = new LinearFunction(1,1);
BC = new LinearFunction(1,1);
AC = new LinearFunction(1,1);


function animate(){
    context.clearRect(0,0,width,height);

    context.fillStyle = "rgba(255,255,255,0.5)";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.closePath();
    context.stroke();
    context.fill();

    ab.slope = (B.y - A.y) / (B.x - A.x);
    ab.intercept = B.y - B.x*ab.slope;
    ab.draw(context);

    bc.slope = (B.y - C.y) / (B.x - C.x);
    bc.intercept = B.y - B.x*bc.slope;
    bc.draw(context);

    ac.slope = (A.y - C.y) / (A.x - C.x);
    ac.intercept = A.y - A.x * ac.slope;
    ac.draw(context);

    BC.slope = -1 / bc.slope;
    BC.intercept = A.y - A.x * BC.slope;
    BC.draw(context);

    AB.slope = -1 / ab.slope;
    AB.intercept = C.y - C.x * AB.slope;
    AB.draw(context);

    AC.slope = -1 / ac.slope;
    AC.intercept = B.y - B.x * AC.slope;
    AC.draw(context);

    A.draw();
    B.draw();
    C.draw();
}

setInterval(animate,10);
