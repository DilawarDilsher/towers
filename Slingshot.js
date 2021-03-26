class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            stroke(48,22,8);
            strokeWeight(10);

                line(pointA.x-20,pointA.y,pointB.x-25,pointB.y-3);
               
       

        }
    }
    
}
