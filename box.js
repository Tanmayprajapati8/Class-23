class Box{
    constructor(x,y,boxwidth,boxheight){
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,boxwidth,boxheight,options);
        this.width=boxwidth;
        this.height=boxheight;
        World.add(myWorld,this.body);
    }
    display(){
        push();

        var pos=this.body.position;
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}