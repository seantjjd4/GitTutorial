var Level1 = Framework.Class(Framework.Level, {
    load: function() {
        this.ball = new Array();
        for (i = 0; i < 4; i++) {
            this.ball[i] = new Array();
            for (j = 0; j < 5; j++) {
                this.ball[i][j] = new Ball();
                this.ball[i][j].init('ball' + i.toString() + '.png');
                this.ball[i][j].position = {
                    x: -999,
                    y: 500
                };
            }
        }
        //這邊4跟5的寫法看起來很髒,之後再改掉

        this.character = new Character();
        this.character.init('run.png');
        this.character.position = {
            x: 300,
            y: 450
        };
        this.character.scale = 0.6
        this.character.run();

        beatsCounter = 0;
        this.sheet = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
        this.tempo = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
        this.combo = 0;
        this.maxCombo = 0;

    },

    initialize: function() {
        this.rootScene.attach(this.character.pic);

        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                this.rootScene.attach(this.ball[i][j].pic);
            }
        }
        //這邊4跟5的寫法看起來很髒,之後再改掉

    },

    click: function(e) {
        beatsCounter = 0;
        this.combo = 0;
        hitsQueue = [];
        //這是一個用來存畫面上的ball的方向與編號的queue,裡面的成員都是陣列[dirc,number]

        this.startTime = Date.now();
    },
    //測試能不能把球拿出來跑,之後會把整個click註解掉

    keydown: function(e) {

        var timePassed = Date.now() - this.startTime;
        if (e) {//這邊判定還需要修改,不然遊戲還沒開始時亂按會跳錯
            var comingBall=this.ball[hitsQueue[0][0]][[hitsQueue[0][1]]];
            const keyConv=['S','D','A','W'];
            if (comingBall.position.x < this.character.position.x + 150&&e.key===keyConv[hitsQueue[0][0]]) {
                //150到-50是判定的range,手感跟原本遊戲差很多...待持續優化
                //keyConv[hitsQueue[0][0]]是來的這顆球的方向
                this.combo++;
                console.log(this.combo);
                comingBall.position = {
                       x: -999,
                       y: 500
                };
                hitsQueue.shift();
                if (this.combo > this.maxCombo) {
                   this.maxCombo = this.combo;
                }
             }else{
                this.combo = 0;
                console.log("Error");
             }
        }
    },

    update: function() {
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                this.ball[i][j].update();
            }
        }
        //這邊4跟5的寫法看起來很髒,之後再改掉

        if (this.startTime > 0) {
            var timePassed = Date.now() - this.startTime;

            if (timePassed > this.tempo[beatsCounter] * 750) {
                //之後會弄個bpm的const。這個*750的動作應該要在init時做完,否則影響遊戲順暢。
                dirc = this.sheet[beatsCounter];
                beatsCounter++;

                for (i = 0; i < this.ball[dirc].length; i++) {
                    //這個for的功能是丟出一個球,dirc是球的方向
                    if (this.ball[dirc][i].position.x < 0) {
                        //代表this.ball[dirc][i]不在畫面內
                        this.ball[dirc][i].start();
                        hitsQueue.push([dirc,i]);
                        break;
                    }
                }

            }

            if (hitsQueue.length > 0) {
                var comingBall=this.ball[hitsQueue[0][0]][[hitsQueue[0][1]]];
                if (comingBall.position.x != -999 && comingBall.position.x < this.character.position.x - 50) {
                    console.log("Too late");
                    this.combo = 0;
                    comingBall.position = {
                        x: -999,
                        y: 500
                    };
                    hitsQueue.shift();
                    //不能直接寫.position.x=-999
                }
            }
        }

        //console.log(Date.now());
    },

    draw: function(parentCtx) {
        this.rootScene.draw();
    },

});
