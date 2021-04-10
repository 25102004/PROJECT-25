class Paper{
    constructor(x,y,r){

    var option = {

    isStatic:false,
    restitution: 0.3,
    density: 1.2,
    friction: 0,
    
    };

    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,option);
    this.image = loadImage("paper.png");
    World.add(this.body,world);
    this.x = x;
    this.y = y;
    this.r = r;

    }

    display(){
         
    var paperpos = this.body.position;
    Push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    imageMode(CENTER);
    image(0,0,this.x,this.y);
    Pop();

    
    }

}