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
        this.playButton = new Framework.Sprite(define.imagePath + 'play-button.png');
        this.exitButton = new Framework.Sprite(define.imagePath + 'exit-button.png');
        this.menu = new Framework.AnimationSprite({url: menuLink, loop: true, speed: 8}); //目測速度差不多，但還是有差，不知道如何設定


        this.playButton.position = {             
            x: 208,
            y: 561
        }

        this.exitButton.position = {             
            x: 248,
            y: 719
        }

        this.playButton.scale = 0.9;

        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        this.menu.scale = 0.48;  //符合螢幕大小

        this.rootScene.attach(this.menu);
        this.menu.start();

    },

    initialize : function() {

    },

    update : function() {
        this.rootScene.update();
        // this.playButton.update();
    },


    mousemove : function(e) {
        if(this.menu){  //不加這個if的話,載入完成前偶爾會跳錯
            if (e.x > 170 && e.x < 260 && e.y > 540 && e.y < 563) {
                this.playTouch = true;
                console.log(this.difficulty);
            }else if(e.x > 170 && e.x < 370 && e.y > 700 && e.y < 723) {
                this.exitTouch = true;
            }else{
                this.playTouch = false;
                this.exitTouch = false;
            }
            
            if (this.difficulty){
                if (e.x > 662 && e.x < 750 && e.y > 730 && e.y < 753){
                    this.backTouch = true;
                }else if (e.x > 662 && e.x < 840 && e.y > 540 && e.y < 563){
                    this.relaxTouch = true;
                }else{
                    this.relaxTouch = false;
                    this.backTouch = false;
                }
                
            }
        }
    },


    click : function (e) {  //play的位置，之後可以創建物件比較好確定位置
        if(this.menu){
            if (this.playTouch){
                this.difficulty = true;
                console.log(this.difficulty);
                // Framework.Game.goToNextLevel();
            }
            else if(this.exitTouch){
                window.close();
            }
            else if (this.difficulty){
                if (this.backTouch){
                    this.difficulty = false;
                }
                if (this.relaxTouch){
                    Framework.Game.goToNextLevel();
                }
            }
        }
        if (e){
            console.log(e.x,e.y);
        }
    },

    draw : function(parentCtx) {

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
            parentCtx.fillStyle = 'rgb(126,150,150)';
            parentCtx.font = '28pt monospace';
            parentCtx.fillText('RELAXING',662,560);
            parentCtx.fillText('MEDIUM',662,600);
            parentCtx.fillText('INTENSE',662,640);
            parentCtx.fillText('OVERLOAD',662,680);

            if (this.relaxTouch){
                parentCtx.fillStyle = 'rgb(255,255,255)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('RELAXING',662,560);
            }else{
                parentCtx.fillStyle = 'rgb(126,150,150)';
                parentCtx.font = '28pt monospace';
                parentCtx.fillText('RELAXING',662,560);
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
    },

});