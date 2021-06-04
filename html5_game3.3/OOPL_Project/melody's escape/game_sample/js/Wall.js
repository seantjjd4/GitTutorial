var Wall = function() {
    this.start = function() {
        this.isOK = true;
        
        //還沒被踢
        this.now = Date.now() + 1400;
    }

    this.init = function() {
        this.position={x:1600,y:450};
        this.alpha=1.0;
        this.passed=1;
    };

    this.update = function() {
        //console.log("?");
        
        if (this.isOK){
            var tmp = this.now - Date.now();
            if (this.now > 0) {
                this.position.x = tmp + 300;
            }
        }
        else{
            if(this.now){
                this.position.x=Date.now()-this.now;
                this.alpha=(1200-this.position.x)/1000;
            }
        }
    };
    this.kicked = function() {
        setTimeout(( () => {this.isOK=false;
        this.now=Date.now()-this.position.x;}),200);
        
    };
    this.myDraw=function(parentCtx){
        //console.log("@");
        let CTXdraw=function(parentCtx,x,y,alpha){
        parentCtx.save();
        parentCtx.translate(x,y);
                parentCtx.beginPath(0);
                width=85;
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
        parentCtx.fillStyle ="rgba(0,0,0,"+alpha+")";
        parentCtx.fill();
        parentCtx.restore();};
        
        for(let i=0;i<6;i++){//bug找超久...不用let i會整個當掉卡死且不能多個
            if(this.alpha>0)
            if(this.isOK){
                CTXdraw(parentCtx,this.position.x,this.position.y+60*i,this.alpha.toString());
            }
            else{
                if(this.alpha>0)CTXdraw(parentCtx,this.position.x,this.position.y+60*i+600*(this.alpha-1)*(this.alpha-0.2*i),this.alpha.toString());
            }
        }
    }
    this.draw = function() {
        //if(this.isOK)
        // this.wall_destroyed.draw();
    };
};
