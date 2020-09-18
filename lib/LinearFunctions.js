<<<<<<< HEAD
class LinearFunction {

	constructor(slope,intercept)
	{
		this.slope = slope;
		this.intercept = intercept;
	}

	y(x)
	{
		return x * this.slope + this.intercept;
	}

	draw(context)
	{
		context.moveTo(0,this.y(0));
		context.lineTo(canvas.width, this.y(canvas.width));
		context.stroke();
	}
	
	interception(line)
	{
        let ans = {};
        ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
        ans.y = this.y(ans.x);
        return ans;
    }
=======
class LinearFunction {

	constructor(slope,intercept)
	{
		this.slope = slope;
		this.intercept = intercept;
	}

	y(x)
	{
		return x * this.slope + this.intercept;
	}

	draw(context)
	{
		context.moveTo(0,this.y(0));
		context.lineTo(canvas.width, this.y(canvas.width));
		context.stroke();
	}
	
	interception(line)
	{
        let ans = {};
        ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
        ans.y = this.y(ans.x);
        return ans;
    }
>>>>>>> 2b64b1abfda69878bff84737786c0c017c3a1bcd
  }