class Rope {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB 
        }
        this.rope =  Constraint.create(options)
        World.add(myWorld,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        line(pointA.x,pointA.y,pointB .x,pointB.y)
    }
}