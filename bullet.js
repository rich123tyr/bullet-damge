class Wall{
    constructor(){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        
     
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle
       
      
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);               
        pop();
      }
    }
