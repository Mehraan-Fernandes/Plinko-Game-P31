class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }

        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body);
    }
    display(){
        push();
        fill(255)
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius)
        pop();
    }
}