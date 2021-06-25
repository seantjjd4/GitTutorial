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
                define.imagePath + 'kick1.png',
                define.imagePath + 'kick2.png',//9
                define.imagePath + 'kick3.png',
                define.imagePath + 'kick4.png',
                define.imagePath + 'kick5.png',
                define.imagePath + 'kick6.png',
                define.imagePath + 'kick7.png',
                define.imagePath + 'kick8.png',
                define.imagePath + 'kick9.png',
                define.imagePath + 'kick10.png',
                define.imagePath + 'kick11.png',
                define.imagePath + 'kick12.png',//19
                define.imagePath + 'slide2.png',
                define.imagePath + 'slide3.png',
                define.imagePath + 'slide4.png',
                define.imagePath + 'slide5.png',
                define.imagePath + 'slide6.png',
                define.imagePath + 'slide7.png',
                define.imagePath + 'slide8.png',
                define.imagePath + 'slide9.png',
                define.imagePath + 'slide10.png',
                define.imagePath + 'slide11.png',//29
                define.imagePath + 'slide12.png',
                define.imagePath + 'back.png',//31
                define.imagePath + 'back1.png',
                define.imagePath + 'back2.png',
                define.imagePath + 'back3.png',
                define.imagePath + 'back4.png',
                define.imagePath + 'back5.png',
                define.imagePath + 'back6.png',
                define.imagePath + 'back7.png',
                define.imagePath + 'back8.png',
                define.imagePath + 'back9.png',
                define.imagePath + 'back10.png',//41
                define.imagePath + 'fall1-2.png',
                define.imagePath + 'fall1-3.png',
                define.imagePath + 'fall1-4.png',
                define.imagePath + 'fall1-5.png',
                define.imagePath + 'fall1-6.png',
                define.imagePath + 'fall1-7.png',
                define.imagePath + 'fall1-8.png',
                define.imagePath + 'fall1-9.png',
                define.imagePath + 'fall1-10.png',//50
                define.imagePath + 'fall1-11.png',
                define.imagePath + 'fall1-12.png',
                define.imagePath + 'fall1-13.png',
                define.imagePath + 'fall1-14.png',
                define.imagePath + 'fall1-15.png',
                define.imagePath + 'fall1-16.png',//56
                define.imagePath + 'glide1.png',
                define.imagePath + 'glide2.png',
                define.imagePath + 'glide3.png',
                define.imagePath + 'glide4.png',
                define.imagePath + 'glide5.png',
                define.imagePath + 'glide6.png',
                define.imagePath + 'glide7.png',
                define.imagePath + 'glide8.png',
                define.imagePath + 'glide9.png',
                define.imagePath + 'glide10.png',
                define.imagePath + 'glide11.png',//67
                define.imagePath + 'jump.png',
                define.imagePath + 'jump1.png',
                define.imagePath + 'jump2.png',
                define.imagePath + 'jump3.png',
                define.imagePath + 'jump4.png',
                define.imagePath + 'jump5.png',
                define.imagePath + 'jump6.png',
                define.imagePath + 'jump7.png',
                define.imagePath + 'jump8.png',
                define.imagePath + 'jump9.png'//77


            ],loop:true , speed:2}); 
        };
        this.jog = function() {
            this.pic.position = {
                x: 300,
                y: 450
            };
            this.pic.scale=1;
            this.pic.start({ from: 0, to:7, loop: true,speed:2 });
        };
        this.back=function(finishPlaying){
            this.pic.scale=1;
            this.pic.start({ from: 31, to:41, loop: false,finishPlaying:finishPlaying,speed:5 });
        }

        this.falldown=function(finishPlaying){
            this.pic.scale=1;
            this.pic.start({ from: 42, to:56, loop: false,finishPlaying:finishPlaying,speed:6 });
        }
        this.kick=function(finishPlaying){
            this.pic.scale=0.45;
            this.pic.start({ from: 7, to:19, loop: false,finishPlaying:finishPlaying,speed:12 });
        }
        this.glide=function(long,finishPlaying){
            this.pic.scale=0.45;
            if(long){
                    let pic=this.pic;
                     this.pic.start({ from: 57, to:62, loop: false,finishPlaying:function(){pic.stop()},speed:8});
                     setTimeout(( () => this.pic.start({ from: 62, to:67, loop: false,finishPlaying:finishPlaying,speed:8})),long-1500);
            }
            else this.pic.start({ from: 57, to:67, loop: false,finishPlaying:finishPlaying,speed:8});
        }
        this.slide=function(long,finishPlaying){
            this.pic.scale=0.45;
            if(long){
                    let pic=this.pic;
                     this.pic.start({ from: 19, to:25, loop: false,finishPlaying:function(){pic.stop()},speed:8});
                     setTimeout(( () => this.pic.start({ from: 25, to:30, loop: false,finishPlaying:finishPlaying,speed:8})),long-1500);
            }
            else this.pic.start({ from: 19, to:30, loop: false,finishPlaying:finishPlaying,speed:8});
        }        
        this.jump=function(long,finishPlaying){
            if(long){
                    let pic=this.pic;
                     this.pic.start({ from: 68, to:73, loop: false,finishPlaying:function(){pic.stop()},speed:4});
                     setTimeout(( () => this.pic.start({ from: 73, to:77, loop: false,finishPlaying:finishPlaying,speed:4})),long-1100);
            }
            else this.pic.start({ from: 68, to:77, loop: false,finishPlaying:finishPlaying,speed:8});
        }           
        this.update=function(){
                
        }
        this.draw=function(){
            this.pic.draw();
        };
};