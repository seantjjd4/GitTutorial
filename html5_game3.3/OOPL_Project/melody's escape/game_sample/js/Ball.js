var Ball = function () {
     this.pic;
        Object.defineProperty(this,'position',{
            get:function(){
                this.pic.position;
            },
            set:function(newValue){
                this.pic.position=newValue;
            },
        });

        this.init=function(sprite){
            this.pic=new Framework.Sprite(define.imagePath+sprite); 
        };
        this.update=function(){
            this.pic.position.x=-Date.now()%1200+1600;

        };
        this.draw=function(){
            this.pic.draw();
        };
};