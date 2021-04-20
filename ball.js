class Ball{
    constructor(x, y) {
        var options = {
         
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.r = 40;
        World.add(world, this.body);
      }
      display(){
         
          push();
          var pos= this.body.position;
          var angle = this.body.angle;
          translate(pos.x,pos.y);
          rotate(angle);
          ellipseMode(RADIUS);
          stroke("#c3015c");
          strokeWeight(5);
          fill("lightPink");
          ellipse(0 ,0 ,this.r, this.r);
          pop();
  
       
      }
  }
  