
class Point {

	  constructor(x,y,radius,color,draggable){
	  this.x = x;
	  this.y = y;
	  this.radius = radius;
	  this.color = color;
	  this.draggable = false || draggable;
	  if(this.draggable) this.drag();

	  if (draggable){
		  this.drag();
	  }
	}
	  
	  drag()
	  {

		let mouse = {};
		let distance = 1000;
		let dragging = false;

		addEventListener("mousedown",(evt) =>{
			mouse.x = evt.clientX;
			mouse.y = evt.clientY;

		  	let dx = evt.clientX - this.x;
		 	let dy = evt.clientY - this.y;
		  	distance = Math.sqrt(dx * dx + dy * dy)

		  if(distance< this.radius)
		  {
			dragging = true;
		  }
		  else{
			 dragging = false;
		  }
		  console.log(dragging);
		})


		addEventListener("mousemove", (evt) => {
		if(dragging){
			this.x = evt.clientX;
			this.y = evt.clientY;
		}
	  })
	  addEventListener("mouseup", () => {
		dragging = false;
	  })
	  }

	
	  draw(context){
		context.beginPath();
		context.fillStyle=this.color;

		context.arc(this.x,this.y,this.radius,0,Math.PI*2);
		context.stroke();
		context.fill();
	  }
	
	}
