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
        this.creditsButton = new Framework.Sprite(define.imagePath + 'credits-button.png');
        this.helpButton = new Framework.Sprite(define.imagePath + 'help-button.png');
        this.menu = new Framework.AnimationSprite({url: menuLink, loop: true, speed: 8}); //目測速度差不多，但還是有差，不知道如何設定


        this.playButton.position = {             
            x: 208,
            y: 561
        }

        this.exitButton.position = {             
            x: 248,
            y: 719
        }
        this.creditsButton.position = {             
            x: 230,
            y: 680
        }
        this.helpButton.position = {             
            x: 287,
            y: 640
        }

        this.playButton.scale = 0.9;
        this.creditsButton.scale = 0.85;
        this.helpButton.scale = 0.85;

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
            if (e.x > 170 && e.x < 251 && e.y > 550 && e.y < 580) {
                this.playTouch = true;
            }else if(e.x > 170 && e.x < 329 && e.y > 710 && e.y < 733) {
                this.exitTouch = true;
            }else if(e.x > 170 && e.x < 293 && e.y > 671 && e.y < 692) {
                this.creditsTouch = true;
            }else if(e.x > 170 && e.x < 405 && e.y > 630 && e.y < 653) {
                this.helpTouch = true;
            }else{
                this.playTouch = false;
                this.exitTouch = false;
                this.creditsTouch = false;
                this.helpTouch = false;
            }
        }
    },


    click : function (e) {  //play的位置，之後可以創建物件比較好確定位置
        if(this.menu){
            if (this.playTouch){
                Framework.Game.goToNextLevel();
            }
            if(this.exitTouch){
                window.close();
            }
        }
        if (e){
            console.log(e.x,e.y);
        }
    },

    draw : function() {
        if (this.playTouch){
            this.playButton.draw();
        }
        if (this.exitTouch){
            this.exitButton.draw();
        }
        if (this.creditsTouch){
            this.creditsButton.draw();
        }
        if (this.helpTouch){
            this.helpButton.draw();
        }
    },

});