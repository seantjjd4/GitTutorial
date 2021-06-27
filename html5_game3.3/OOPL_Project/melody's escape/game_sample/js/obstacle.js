var Obstacle= function () {
        this.arrow;
        this.start=function(){
            this.now=Date.now()+1400;
            if(this.dirc==3||this.dirc==1)this.arrow.rotation=180;
            else if(this.dirc==5)this.arrow.rotation=90;
            else if(this.dirc==4) this.arrow.rotation=270;
        }
       
        
        this.init=function(){
            this.now=0;
            this.position={x:1600,y:700};
            this.alhpa=1;
            this.passed=1;
            this.width=70;
            this.thick=150;
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

                if(this.arrow)this.arrow.draw();
        let CTXdraw=function(parentCtx,x,y,width,height){

        parentCtx.save();
        parentCtx.translate(x,y);
                parentCtx.beginPath(0);
                radius=20
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
        CTXdraw(parentCtx,this.position.x,this.position.y,this.width,this.thick);
        }
        
        this.draw=function(){

        };
};