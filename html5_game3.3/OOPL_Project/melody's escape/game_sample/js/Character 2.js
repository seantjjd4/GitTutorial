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

        this.init=function(){
            this.pic=new Framework.AnimationSprite({url:
            [               
                define.imagePath + 'jog.png',
                define.imagePath + 'jog1.png',
                define.imagePath + 'jog2.png',
                define.imagePath + 'jog3.png',
                define.imagePath + 'jog4.png',
                define.imagePath + 'jog5.png',
                define.imagePath + 'jog6.png',
                define.imagePath + 'jog7.png',
                define.imagePath + 'kick.png',
                define.imagePath + 'kick1.png',
                define.imagePath + 'kick2.png',
                define.imagePath + 'kick3.png',
                define.imagePath + 'kick4.png',
                define.imagePath + 'kick5.png',
                define.imagePath + 'slide.png',
                define.imagePath + 'slide1.png',
                define.imagePath + 'slide2.png',
                define.imagePath + 'slide3.png',
                define.imagePath + 'slide4.png'

            ],loop:true , speed:2}); 
        };
        this.jog = function() {
            this.pic.start({ from: 0, to:7, loop: true });
        };
        this.kick=function(finishPlaying){
            this.pic.start({ from: 7, to:13, loop: false,finishPlaying:finishPlaying });
        }
        this.slide=function(finishPlaying){
            this.pic.start({ from: 13, to:18, loop: false,finishPlaying:finishPlaying });
        }        
        this.update=function(){
                
        }
        this.draw=function(){
            this.pic.draw();
        };
};