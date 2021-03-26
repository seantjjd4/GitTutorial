var Ball = function () {
        Object.defineProperty(this,'position',{
            get:function(){
                return this.pic.position;
            },
            set:function(newValue){
                this.now=0;//手動設定pos時將停止運動。now為0即不動。
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
                if (this.now>0){
                    var tmp=this.now-Date.now()
                    this.pic.position.x=tmp+300;
                }
        };
        this.draw=function(){
            this.pic.draw();
        };
};