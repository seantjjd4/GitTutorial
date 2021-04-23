var Obstacle= function () {
        this.start=function(){
                this.now=Date.now()+1400;
        }

        this.init=function(){
            this.now=0;
            this.x=1600;
            this.y=600;
            this.alpha=100;
        };
        this.update=function(){

        };
        this.myDraw=function(parentCtx){
                if (this.now>0){
                    var tmp = this.now - Date.now();
                    this.x = tmp + 300;
                }
                

        parentCtx.save();
        parentCtx.translate(300,300);
                parentCtx.beginPath(0);
                width=100;
                radius=20;height=50;
        parentCtx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);

        parentCtx.lineTo(radius, height);

        parentCtx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);

        parentCtx.lineTo(0, radius);

        parentCtx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);

        parentCtx.lineTo(width - radius, 0);

        parentCtx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);

        parentCtx.lineTo(width, height - radius);
        parentCtx.closePath();
        parentCtx.fillStyle ="rgba(255,255,255,"+"100"+")";
        parentCtx.fill();
        parentCtx.restore();
        }
        this.draw=function(){
            this.pic.draw();
        };
};