var Obstacle= function () {
        
        this.start=function(){
            this.now=Date.now()+1400;
        }

        this.init=function(){
            this.now=0;
            this.position={x:1600,y:700};
            this.alhpa=1;
            this.passed=1;
        };
        this.update=function(){
                if (this.now>0){
                    var tmp = this.now - Date.now();
                    this.position.x = tmp + 300;
                }                
        };
        this.myDraw=function(parentCtx){

                
        let CTXdraw=function(parentCtx,x,y){

        parentCtx.save();
        parentCtx.translate(x,y);
                parentCtx.beginPath(0);
                width=50;radius=20;height=100;
        parentCtx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
        parentCtx.lineTo(radius, height);
        parentCtx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
        parentCtx.lineTo(0, radius);
        parentCtx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
        parentCtx.lineTo(width - radius, 0);
        parentCtx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
        parentCtx.lineTo(width, height - radius);
        parentCtx.closePath();
        parentCtx.fillStyle ="black";
        parentCtx.fill();
        parentCtx.restore();};
        if(this.position.x>0)CTXdraw(parentCtx,this.position.x,this.position.y);
        }
        
        this.draw=function(){

        };
};