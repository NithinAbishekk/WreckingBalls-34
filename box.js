class Box{
    constructor(x, y) {
        var options = {
         
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, 58, 58, options);
        this.width = 58;
        this.height = 58;
        World.add(world, this.body);
      }
      display(){
         
          push();
          var pos= this.body.position;
          var angle = this.body.angle;
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          stroke("#c3015c");
          strokeWeight(5);
          fill("lightPink");
          rect(0,0,this.width, this.height);
          pop();
  
       
      }
  }
  