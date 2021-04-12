class Rope{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:50 
        }
            this.pointB = pointB;
            this.rope = Constraint.create(options);
    }

    display()
    {
        if(this.rope.bodyA)
        {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("grey")
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
}