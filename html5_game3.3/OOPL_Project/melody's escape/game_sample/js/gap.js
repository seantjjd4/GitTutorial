var Gap= function () {
        
        this.start=function(){
            this.now=Date.now()+1400;
        }

        this.init=function(){
            this.now=0;
            this.position={x:1600,y:810};
            this.passed=1;
            this.width=250;
            this.arrow=new Framework.Sprite(define.imagePath+'arrow.png');
            this.arrow.position={x:1600,y:870};
        };
        this.update=function(){
                if (this.now>0){
                    var tmp = this.now - Date.now();
                    this.position.x = tmp + 300;
                    this.arrow.position.x=this.position.x-220;
                }                
        };
        this.myDraw=function(parentCtx){

        this.arrow.draw();
        

        let CTXdraw=function(parentCtx,x,y,width,height){

        parentCtx.save();
        parentCtx.translate(x,y);
                parentCtx.beginPath(0);
                radius=20
        parentCtx.arc(0, radius, radius, Math.PI*3/2, 0);
        parentCtx.lineTo(radius, 90);
        parentCtx.lineTo(width , 90);
        parentCtx.lineTo(width , radius);
        parentCtx.arc(width+radius, radius, radius, Math.PI, Math.PI*3/2);
        parentCtx.closePath();
        parentCtx.fillStyle ="rgb(66,45,14)";
        parentCtx.fill();
        parentCtx.restore();};
        
        CTXdraw(parentCtx,this.position.x,this.position.y,this.width,150);
        }
        
        this.draw=function(){

        };
};