<<<<<<< HEAD
/*
	23-2-2020
	klasse om een tweedimensionale vector mee aan te geven
	eigenschappen
	* dx (verschuiving in de x-richting)
	* dy (verschuiving in de y-richting )
*/

class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    vectorSum(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }
=======
/*
	23-2-2020
	klasse om een tweedimensionale vector mee aan te geven
	eigenschappen
	* dx (verschuiving in de x-richting)
	* dy (verschuiving in de y-richting )
*/

class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    vectorSum(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }
>>>>>>> 2b64b1abfda69878bff84737786c0c017c3a1bcd
}