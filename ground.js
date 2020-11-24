class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);

    }
    
    display(){
        push();
        rectMode(CENTER);
        var pos=this.body.position;
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }
}