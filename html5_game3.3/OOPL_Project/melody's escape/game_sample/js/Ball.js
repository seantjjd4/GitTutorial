var Ball = function () {
     this.pic;
        Object.defineProperty(this,'position',{
            get:function(){
                return this.pic.position;
            },
            set:function(newValue){
                this.pic.position=newValue;
            },
        });
        Object.defineProperty(this,'run',{
            get:function(){
                return this.pic.run;
            },
            set:function(newValue){
                this.pic.run=newValue;
            },
        });

        this.init=function(sprite){
            this.pic=new Framework.Sprite(define.imagePath+sprite); 
        };
        this.update=function(){
                this.pic.position.x=this.pic.run?-Date.now()%1400+1600:-999;
        };
        this.draw=function(){
            this.pic.draw();
        };
};