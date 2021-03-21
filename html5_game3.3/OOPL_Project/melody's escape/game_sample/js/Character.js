var Character = function () {
     this.component;
     this.pic;
     this.mbox2D;
        Object.defineProperty(this,'position',{
            get:function(){
                this.component.position;
            },
            set:function(newValue){
                this.component.position=newValue;
            },
        });
        Object.defineProperty(this,'scale',{
            get:function(){
                this.component.scale;
            },
            set:function(newValue){
                this.component.scale=newValue;
            },
        });
        Object.defineProperty(this,'rotation',{
            get:function(){
                this.component.rotation;
            },
            set:function(newValue){
                this.component.rotation=newValue;
            },
        });
        Object.defineProperty(this,'isSensor',{
            get:function(){
                this.component.isSensor;
            },
            set:function(newValue){
                this.component.isSensor=newValue;
            },
        });
        this.init=function(sprite,box2D){
            this.mbox2D=box2D;
            this.pic=new Framework.AnimationSprite({url:define.imagePath+sprite, col:3 , row:3 , loop:true , speed:2}); 
            this.component=new Framework.squareComponent(this.pic,box2D.bodyType_Dynamic,box2D);
            this.component.fixtureDef.m_restitution=0;
            this.component.Body.m_userData="Character";
        };
        var runner=this;
        this.run = function() {
            runner.pic.start({ from: 0, to:7, loop: true });
        };
        this.update=function(){
            this.component.update();
        };
        this.draw=function(){
            this.pic.draw();
        };
};