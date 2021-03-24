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
        this.menu = new Framework.AnimationSprite({url: menuLink, loop: true, speed: 8}); //目測速度差不多，但還是有差，不知道如何設定

        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.menu.scale = 0.48;  //符合我的螢幕大小，不知道合不合你的

        this.rootScene.attach(this.menu);
        this.menu.start();

    },

    initialize : function() {

    },

    update : function() {
        this.rootScene.update();
    },

    click : function (e) {  //play的位置，之後可以創建物件比較好確定位置
        if (e.x > this.menu.position.x - 630 && e.x < this.menu.position.x-550 && e.y > this.menu.position.y + 100 && e.y < this.menu.position.y + 130){
            Framework.Game.goToNextLevel();
        }

    },

    draw : function() {

    },

});