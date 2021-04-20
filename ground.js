class Ground{

    constructor(x,y){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,1200,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("lightGreen");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1200,20);
    }
}