var Ball = function () {
        Object.defineProperty(this,'position',{
            get:function(){
                return this.pic.position;
            },
            set:function(newValue){
                this.pic.position=newValue;
            },
        });
        this.start=function(){
                this.now=Date.now()+1400;
        }

        this.init=function(sprite){
            this.pic=new Framework.Sprite(define.imagePath+sprite); 
        };
        this.update=function(){
                var tmp=this.now-Date.now()
                this.pic.position.x=tmp>-20?tmp+300:-999;
        };
        this.draw=function(){
            this.pic.draw();
        };
};