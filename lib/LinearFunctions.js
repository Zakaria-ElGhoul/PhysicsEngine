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
  }