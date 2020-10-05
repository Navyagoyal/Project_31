class Plinko{
    constructor(x,y,r,angle){
        var options = {
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options);
    }
}