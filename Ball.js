class Ball {
    constructor(x,y){
        var options = {
            isStatic : false,
            friction : 0.2,
            density : 0.5,
            restitution : 1
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);
        }

        display(){
           var ang = this.body.angle;
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(ang);
            ellipse(0,0,50);
            pop();
        }
    }

       