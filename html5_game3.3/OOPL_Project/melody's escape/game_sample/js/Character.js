var Character = function () {
        Object.defineProperty(this,'position',{
            get:function(){
                return this.pic.position;
            },
            set:function(newValue){
                this.pic.position=newValue;
            },
        });
        Object.defineProperty(this,'scale',{
            get:function(){
                return this.pic.scale;
            },
            set:function(newValue){
                this.pic.scale=newValue;
            },
        });
        Object.defineProperty(this,'rotation',{
            get:function(){
                return this.pic.rotation;
            },
            set:function(newValue){
                this.pic.rotation=newValue;
            },
        });

        this.init=function(sprite){
            this.pic=new Framework.AnimationSprite({url:define.imagePath+sprite, col:3 , row:3 , loop:true , speed:2}); 
        };
        this.run = function() {
            this.pic.start({ from: 0, to:7, loop: true });
        };
        this.update=function(){
                
        }
        this.draw=function(){
            this.pic.draw();
        };
};