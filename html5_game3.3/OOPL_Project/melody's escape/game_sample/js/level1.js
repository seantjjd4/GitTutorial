var Level1 = Framework.Class(Framework.Level, {
    load: function() {

        this.background = new Framework.Sprite(define.imagePath+'yellow-background.png');

        this.background.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        this.background.scale = 0.48; 


        this.ball = new Array();
        for (i = 0; i < 4; i++) {
            this.ball[i] = new Array();
            for (j = 0; j < 5; j++) {
                this.ball[i][j] = new Ball();
                this.ball[i][j].init('ball' + i.toString() + '.png');
                this.ball[i][j].position = {
                    x: -999,
                    y: 550
                };
            }
        }
        //這邊4跟5的寫法看起來很髒,之後再改掉
        lifes=5;
        this.heart = new Array();
        for (i = 0; i < lifes; i++) {
            this.heart[i]=new Framework.Sprite(define.imagePath+'heart.png');
            this.heart[i].position = {
                x: 100+50*i,
                y: 200
            };
        this.heart[i].scale=0.05;
        }


        this.character = new Character();
        this.character.init();
        this.character.position = {
            x: 300,
            y: 450
        };
        this.character.scale =1;
        this.character.jog();
        beatsCounter = 0;
        //this.sheet=[0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0];
        this.sheet = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        //this.tempo=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
        this.tempo = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,63,64,65,66,67,69,71,72,73,74,75,77,79,80,81,82,83,85,87,88,89,90,91,93];
        //這邊間隔2是指一拍(4分音符),間隔1指半拍,間隔4指2拍,以此類推。
        this.combo = 0;
        this.maxCombo = 0;
        
        this.rootScene.attach(this.background)

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
        this.audio = new Framework.Audio({
            song:{
                mp3: define.musicPath + 'flower_dance_120bpm.mp3',
            }
        });
        //播放時, 需要給name, 其餘參數可參考W3C
        setTimeout(( () => this.audio.play({name: 'song', loop: false})),1100);
        this.startTime = Date.now();
    },
    //測試能不能把球拿出來跑,之後會把整個click註解掉

    keydown: function(e) {

        var timePassed = Date.now() - this.startTime;
        const keyConv=['S','D','A','W'];
        const keyrConv=['Down','Right','Left','Up'];
        if (e&&keyConv.includes(e.key)) {
            var comingBall=this.ball[hitsQueue[0][0]][[hitsQueue[0][1]]];
            if (comingBall.position.x < this.character.position.x + 150) {
                //150到-50是判定的range,手感跟原本遊戲差很多...待持續優化
                //keyConv[hitsQueue[0][0]]是來的這顆球的方向
                comingBall.position = {
                            x: -999,
                            y: 550
                };
                if(e.key===keyConv[hitsQueue[0][0]]){
                    this.combo++;
                    console.log(this.combo);
                    if (this.combo > this.maxCombo) {
                        this.maxCombo = this.combo;
                    }
                    //依照原本的遊戲,不管有沒有按對,應該都要把當前這顆移除掉。
                }else{
                    this.combo = 0;
                    if(lifes>0)lifes-=1; //扣愛心
                    console.log("Wrong dir");
                }
                hitsQueue.shift();
             }else{
                this.combo = 0;
                if(lifes>0)lifes-=1; //扣愛心
                console.log("Error");
             }
        }
        if(e&&keyrConv.includes(e.key)){   // kick 跟 jog
            var game=this;
            if(e.key==="Right"||e.key==="Up"){
                this.character.kick(function(){
                    game.character.jog();
                });
            }
            if(e.key==="Down"){
                this.character.slide(function(){
                    game.character.jog();
                });
            }

            if(e.key==="Left"){
                /*
                this.wall = new Wall();
                this.wall.init();
                this.rootScene.attach(this.wall.wall);
                
                this.wall.start();
                */
                this.obstacle=new Obstacle();
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

            if (timePassed >= this.tempo[beatsCounter] * 250) {

                //之後會弄個bpm的const。這個this.tempo全部*250的動作應該要在init時做完,否則影響遊戲順暢。
                //bpm是beats per minutes,一首120bpm的歌的8分音符應該是1秒2拍,1拍0.5秒,半拍則是250ms。
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
                        y: 550
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
        console.log("?");
        //if(this.obstacle)this.obstacle.myDraw(parentCtx);
        for(i=0;i<lifes;i++)
            this.heart[i].draw();
    },

});
