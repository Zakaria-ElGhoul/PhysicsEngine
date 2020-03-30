class Polygon {
    constructor(points){
        this.points = points;
    }

    draw(context){
      for(let i = 0; i < this.points.length; i++){
            points[i].draw(context);
   }
            context.beginPath();
            context.moveTo(points[0].x,points[0].y);

      for(let i = 0; i < this.points.length; i++){
         context.lineTo(points[i].x,points[i].y);
   }
          context.closePath();
          context.stroke();
        }        
 }