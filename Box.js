class Box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :1.0,
          //isStatic:true
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   
    display(){
      //console.log(this.body.speed);
      if(this.body.speed <4){
     // var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -250;
      tint(255, this.Visibility);
      rectMode(CENTER);
      noFill();
      noStroke();
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      
      pop();
      
    }
  }
}