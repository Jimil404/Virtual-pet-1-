class slingshot{
	constructor(bodyA,bodyB)
	{
		
		var options={ bodyA:bodyA,			 
			pointB:bodyB, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=bodyA
		this.pointB=bodyB
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=bodyA;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}