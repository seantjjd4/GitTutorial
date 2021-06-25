var Menu = Framework.exClass(Framework.GameMainMenu ,{

    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.png');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
    },


    load : function(){
        var menuLink = [          // 人物點頭的動作
            define.imagePath + 'menu1.png',
            define.imagePath + 'menu2.png',
            define.imagePath + 'menu3.png',
            define.imagePath + 'menu4.png',
            define.imagePath + 'menu5.png',
            define.imagePath + 'menu6.png',
            define.imagePath + 'menu7.png',
            define.imagePath + 'menu8.png',
            define.imagePath + 'menu9.png',
            define.imagePath + 'menu10.png',
            define.imagePath + 'menu11.png',
            define.imagePath + 'menu10.png',
            define.imagePath + 'menu9.png',
            define.imagePath + 'menu8.png',
            define.imagePath + 'menu7.png',
            define.imagePath + 'menu6.png',
            define.imagePath + 'menu5.png',
            define.imagePath + 'menu4.png',
            define.imagePath + 'menu3.png',
            define.imagePath + 'menu2.png',
            define.imagePath + 'menu1.png'
        ];
        // this.playButton = new Framework.Sprite(define.imagePath + 'play-button.png');
        // this.exitButton = new Framework.Sprite(define.imagePath + 'exit-button.png');
        this.howToPlay = new Framework.Sprite(define.imagePath + 'howToPlay.png');
        this.menu = new Framework.AnimationSprite({url: menuLink, loop: true, speed: 8}); //目測速度差不多，但還是有差，不知道如何設定

        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        this.menu.scale = 0.48;  //符合螢幕大小

        this.howToPlay.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.howToPlay.scale = 0.9;

        this.rootScene.attach(this.menu);
        this.menu.start();

    },

    initialize : function() {
        this.menuStatus = true;
        level_relax = false;
        level_midium = false;
        level_intense = false;
        level_overload = false;
    },

    update : function() {
        this.rootScene.update();
        // this.playButton.update();
    },


    mousemove : function(e) {
        if(this.menuStatus){  //不加這個if的話,載入完成前偶爾會跳錯
            if (e.x > 170 && e.x < 260 && e.y > 538 && e.y < 565) {
                this.playTouch = true;
            }else if(e.x > 170 && e.x < 420 && e.y > 578 && e.y < 605) {
                this.howTouch = true;
            }else if(e.x > 170 && e.x < 370 && e.y > 618 && e.y < 645) {
                this.creditTouch = true;
            }else if(e.x > 170 && e.x < 370 && e.y > 698 && e.y < 725) {
                this.exitTouch = true;
            }
            else {
                this.playTouch = false;
                this.howTouch = false;
                this.creditTouch = false;
                this.exitTouch = false;
            }
            
            if (this.difficulty){
                if (e.x > 662 && e.x < 750 && e.y > 728 && e.y < 755){
                    this.backTouch = true;
                }else if (e.x > 662 && e.x < 840 && e.y > 538 && e.y < 565){
                    this.relaxTouch = true;
                }else if (e.x > 662 && e.x < 797 && e.y > 578 && e.y < 605){
                    this.midiumTouch = true;
                }else if (e.x > 662 && e.x < 817 && e.y > 618 && e.y < 645){
                    this.intenseTouch = true;
                }else if (e.x > 662 && e.x < 840 && e.y > 658 && e.y < 685){
                    this.overloadTouch = true;
                }
                else{
                    this.relaxTouch = false;
                    this.midiumTouch = false;
                    this.intenseTouch = false;
                    this.overloadTouch = false;
                    this.backTouch = false;
                }
                
            }
        }
    },


    click : function (e) {  //play的位置，之後可以創建物件比較好確定位置
        if(this.menuStatus){
            if (this.playTouch){
                this.difficulty = true;
                // Framework.Game.goToNextLevel();
            }else if (this.howTouch){
                this.how = true;
                
                this.menuStatus = false;
                console.log(this.menuStatus);
            }
            else if(this.exitTouch){
                window.close();
            }

            if (this.difficulty){
                if (this.backTouch){
                    this.difficulty = false;
                    this.backTouch = false;
                }
                else if (this.relaxTouch){
                    level_relax = true;
                    Framework.Game.goToNextLevel();
                }
                else if (this.midiumTouch){
                    level_midium = true;
                    Framework.Game.goToNextLevel();
                }
                else if (this.intenseTouch){
                    level_intense = true;
                    Framework.Game.goToNextLevel();
                }
                else if (this.overloadTouch){
                    level_overload = true;
                    Framework.Game.goToNextLevel();
                }
            }
        }else if(this.how){
            this.how = false;
            
            this.menuStatus = true;
        }
        
        if (e){
            console.log(e.x,e.y);
        }
    },

    draw : function(parentCtx) {
        if(this.how)this.howToPlay.draw();
        if (this.menuStatus){
            parentCtx.strokeStyle = 'rgb(203,209,223)';
            parentCtx.lineWidth = 4;
            parentCtx.strokeRect(118,500,484,280)
            parentCtx.fillStyle = 'rgb(43,78,129)';
            parentCtx.fillRect(122,504,477,273);
            

            if (this.playTouch){
                parentCtx.fillStyle = 'rgb(255,255,255)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('PLAY',170,560);
            }else{
                parentCtx.fillStyle = 'rgb(126,150,150)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('PLAY',170,560);
            }
            if (this.howTouch){
                parentCtx.fillStyle = 'rgb(255,255,255)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('HOW TO PLAY',170,600);
            }else{
                parentCtx.fillStyle = 'rgb(126,150,150)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('HOW TO PLAY',170,600);
            }
            if (this.creditTouch){
                parentCtx.fillStyle = 'rgb(255,255,255)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('CREDITS',170,640);
            }else{
                parentCtx.fillStyle = 'rgb(126,150,150)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('CREDITS',170,640);
            }
            if (this.exitTouch){
                parentCtx.fillStyle = 'rgb(255,255,255)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('EXIT GAME',170,720);
            }else{
                parentCtx.fillStyle = 'rgb(126,150,150)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('EXIT GAME',170,720);
            }
            
            

            if (this.difficulty){
                parentCtx.strokeStyle = 'rgb(203,209,223)';
                parentCtx.lineWidth = 4;
                parentCtx.strokeRect(621,500,300,280);
                parentCtx.fillStyle = 'rgb(43,78,129)';
                parentCtx.fillRect(625,504,293,273);

                if (this.relaxTouch){
                    parentCtx.fillStyle = 'rgb(255,255,255)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('RELAXING',662,560);
                }else{
                    parentCtx.fillStyle = 'rgb(126,150,150)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('RELAXING',662,560);
                }

                if (this.midiumTouch){
                    parentCtx.fillStyle = 'rgb(255,255,255)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('MIDIUM',662,600);
                }else{
                    parentCtx.fillStyle = 'rgb(126,150,150)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('MIDIUM',662,600);
                }

                if (this.intenseTouch){
                    parentCtx.fillStyle = 'rgb(255,255,255)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('INTENSE',662,640);
                }else{
                    parentCtx.fillStyle = 'rgb(126,150,150)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('INTENSE',662,640);
                }

                if (this.overloadTouch){
                    parentCtx.fillStyle = 'rgb(255,255,255)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('OVERLOAD',662,680);
                }else{
                    parentCtx.fillStyle = 'rgb(126,150,150)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('OVERLOAD',662,680);
                }

                if (this.backTouch){
                    parentCtx.fillStyle = 'rgb(255,255,255)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('BACK',662,750);
                }else{
                    parentCtx.fillStyle = 'rgb(126,150,150)';
                    parentCtx.font = '28pt monospace';
                    parentCtx.fillText('BACK',662,750);
                }
            }
        }   
    },

});