var Level8 = Framework.Class(Framework.Level, {
    load: function() {
        this.hitSpark={time:0,dirc:""};
        this.background = new Framework.Sprite(define.imagePath+'yellow-background.png');
        songname="king";
        this.background.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        this.transparent=new Framework.Sprite(define.imagePath+'transparent.png');
        this.transparent.position={x:1,y:1};

        this.background.scale = 0.48; 
        this.toast={time:0,str:""};
        Difficulty="Overload";
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


        this.obstacle=new Array();

        this.startTime=0;
        this.character = new Character();
        this.character.init();
        this.character.position = {
            x: 300,
            y: 450
        };
        this.character.scale =1;
        this.character.jog();
        this.ballCounter = 0;
        this.obstacleCouner=0;
        //this.sheet_ball=[0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0];
        //this.sheet_ball = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        


        this.sheet_ball=[0,0,1,1,1,1,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,
        1,1,1,3,3,3,3,2,3,1,0,
        3,2,3,1,1,1,
        1,0,1,2,2,2,  
        3,2,3,1,1,1,
        1,0,1,2,3,0,0,0,
        3,2,3,3,3,
        3,3,3,0,1,1,0,2,1,2,0,0,1,2,1,2,2,1,3,0,0,3,3,1,0,2,2,3,0,2,0,3,1,1,3,1,1,0,2,0,2,0,0,2,1,1,1,2,2,1,1,2,0,3,0,2,1,0,2,2,2,0,1,1,2,0,1,3,2,0,0,2,3,1,0,2,2,3,1,0,0,1,0,1,0,1,1,2,1,0,3,2,1,2,1,3,3,2,2,3,0,1,3,2,1,1,3,3,1,3,1,3,3,0,3,3,2,1,1,2,0,0,3,1,1,0,3,3,0,3,2,2,0,2
        ];

        this.sheet_obstacle=[4,9,2,2,1,1,0,0,2,2,0,0,2,2,0,0,2,2,
        3,3,3,4,5,5,5,9,
        -1,-1,-1,
        2,2,2,
        1,1,1,
        -1,-1,-1,4,9,
        0,0,-1,1,2,-1,0,1,1,2,-1,0,0,-1,0,0,2,2,-1,2,-1,2,0,1,0,2,2,0,0,0,-1,1,0,0,2,0,0,-1,1,0,2,2,0,-1,2,1,1,0,0,1,1,2,1,2,-1,2,2,0,1,2,-1,2,-1,-1,1,0,2
        ];

        this.tempo_ball = [0,2,4,4.5,5,5.5,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,44,48,52,56,60,64,68,69,70,71,
        72,74,76,78,78.7,79.4,
        80,82,84,86,86.7,87.4,
        88,90,92,94,94.7,95.4,
        96,98,100,102,103,108,109,110,
        111,113,113.7,114.4,
        120,121,123,124,126,127,129,130,132,133,135,136,138,139,141,142,144,145,147,148,150,151,153,154,156,157,159,160,162,163,165,166,168,169,171,172,174,175,177,178,180,181,183,184,186,187,189,190,192,193,195,196,198,199,201,202,204,205,207,208,210,211,213,214,216,217,219,220,222,223,225,226,228,229,231,232,234,235,237,238,240,241,243,244,246,247,249,250,252,253,255,256,258,259,261,262,264,265,267,268,270,271,273,274,276,277,279,280,282,283,285,286,288,289,291,292,294,295,297,298,300,301,303,304,306,307,309,310,312,313,315,316,318,319


        ];

        this.tempo_obstacle=[6,8,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,
        41,45,49,53,57,61,65,68,
        73,75,77,
        81,83,85,
        89,91,93,
        97,99,101,104,108,
        112,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,176,179,182,185,188,191,194,197,200,203,206,209,212,215,218,221,224,227,230,233,236,239,242,245,248,251,254,257,260,263,266,269,272,275,278,281,284,287,290,293,296,299,302,305,308,311,314,317

        ];
        this.hold_on="";
        
        //this.sheet_obstacle=[0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        //this.tempo_ball=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
        //this.tempo_ball = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,63,64,65,66,67,69,71,72,73,74,75,77,79,80,81,82,83,85,87,88,89,90,91,93];
        //這邊間隔2是指一拍(4分音符),間隔1指半拍,間隔4指2拍,以此類推。
        this.combo = 0;
        maxCombo = 0;
        this.ballCounter = 0;
        this.obstacleCouner = 0;
        this.combo = 0;
        hitsQueue = [];
        hits=0;
        ERR=0;
        TOOLATE=0;
        setTimeout((()=>this.audio = new Framework.Audio({
            king:{
                mp3: define.musicPath + 'KING.mp3',
            }
        })),1000);
        this.isStart=0;
            setTimeout((()=>this.startTime = Date.now()),4000);
        this.invincible=0;
    },

    initialize: function() {
        this.rootScene.attach(this.background);
        this.rootScene.attach(this.character.pic);
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                this.rootScene.attach(this.ball[i][j].pic);
            }
        }
        this.rootScene.attach(this.transparent);
        //這邊4跟5的寫法看起來很髒,之後再改掉
    },

    click: function(e) {

        //這是一個用來存畫面上的ball的方向與編號的queue,裡面的成員都是陣列[dirc,number]

        //播放時, 需要給name, 其餘參數可參考W3C
        
        
        
    },
    //測試能不能把球拿出來跑,之後會把整個click註解掉

    keydown: function(e) {
        if(e.key==='H')this.invincible=1;

        var timePassed = Date.now() - this.startTime;
        const keyConv=['S','D','A','W'];
        const keyrConv=['Down','Right','Left','Up'];
        if (e&&keyConv.includes(e.key)&&hitsQueue.length>0) {
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
                    hits++;
                    console.log(this.combo);
                    this.hitSpark={time:200+Date.now(),dirc:e.key};
                    
                    //依照原本的遊戲,不管有沒有按對,應該都要把當前這顆移除掉。
                }else{
                    this.combo = 0;
                    if(lifes>0)lifes-=1; //扣愛心
                    console.log("Wrong dir");
                    this.toast={time:Date.now()+500,str:"Error"};
                    ERR++
                }
                hitsQueue.shift();
             }else{
                this.combo = 0;
                if(lifes>0)lifes-=1; //扣愛心
                this.toast={time:Date.now()+500,str:"Error"};
                ERR++
             }
        }
        if(e&&keyrConv.includes(e.key)){   // kick 跟 jog
            var game=this;
            for(i=this.obstacle.length-1;i>=0;i--){
                if(this.obstacle[i].passed)break;
            }
            if(this.obstacle[i] &&this.obstacle[i].passed&&this.obstacle[i].position.x<this.character.position.x + 350){
                this.combo+=2;
                hits+=2;
                this.obstacle[i].passed=0;
                if(this.obstacle[i].dirc<1&&e.key==="Up"){
                    this.character.kick(function(){
                        game.character.jog();
                    });
                }
                else if(this.obstacle[i].dirc==1&&e.key==="Down"){

                    this.character.slide(0,function(){
                        game.character.jog();
                    });
                }
                else if(this.obstacle[i].dirc==2&&e.key==="Right"){
                    this.obstacle[i].kicked();
                    this.character.kick(function(){
                        game.character.jog();
                    });
                }
                else if(this.obstacle[i].dirc==3&&e.key==="Down"){
                    this.hold_on="Down";
                    this.character.position={x:this.character.position.x,y:this.character.position.y+50};
                    setTimeout(( () =>game.hold_on="" ),this.obstacle[i].holdTime-1500);
                    this.character.slide(this.obstacle[i].holdTime,function(){
                        game.character.position={x:game.character.position.x,y:game.character.position.y-50};
                        game.character.jog();
                    });

                }
                else if(this.obstacle[i].dirc==4&&e.key==="Left"){
                    this.hold_on="Left";
                    setTimeout(( () =>game.hold_on="" ),this.obstacle[i].holdTime-1500);
                    this.character.glide(this.obstacle[i].holdTime,function(){
                        game.character.position={x:game.character.position.x,y:game.character.position.y-50};
                        game.character.jog();
                    });

                }
                else if(this.obstacle[i].dirc==5&&e.key==="Right"){
                    this.hold_on="Right";
                    //this.character.position={x:this.character.position.x,y:this.character.position.y+50};
                    setTimeout(( () =>game.hold_on="" ),this.obstacle[i].holdTime-1500);
                    this.character.jump(this.obstacle[i].holdTime,function(){
                        game.character.position={x:game.character.position.x,y:game.character.position.y-50};
                        game.character.jog();
                    });

                }                
                else{
                    this.combo = 0;
                    if(lifes>0)lifes-=1; //扣愛心
                    this.toast={time:Date.now()+500,str:"Error"};
                    ERR++
                    this.obstacle[i].passed=0;
                    let game=this;
                    if(this.obstacle[i].dirc>0&&this.obstacle[i].dirc<=3||this.obstacle[i].dirc==5){
                        this.character.back(function(){
                            game.character.jog();
                        });
                    }else if(this.obstacle[i].dirc==0){
                        this.character.falldown(function(){
                            game.character.jog();
                        });
                    }else if(this.obstacle[i].dirc==-1||this.obstacle[i].dirc==4){
                        setTimeout(( () =>                        this.character.falldown(function(){
                            game.character.jog();
                        }) ),200);
                    }
                }
                console.log(this.combo);


            }
            else{
                    this.combo = 0;
                    if(lifes>0)lifes-=1; //扣愛心
                    this.toast={time:Date.now()+500,str:"Error"};
                    ERR++;
            }

        }
    },

    keyup:function(e){
        if(e){
             if(this.hold_on===e.key){
                this.combo = 0;
                if(lifes>0)lifes-=1; //扣愛心
                this.toast={time:Date.now()+500,str:"Released"};
             }
        }
    },
    update: function() {
        if (this.combo > maxCombo)  maxCombo = this.combo;
        if(this.startTime>0&&this.isStart==0&&Date.now()-this.startTime>900){
            this.audio.play({name: 'king', loop: false});
            this.isStart=1;
        }
//||(lifes==0&&this.startTime >0) 密技
        if(this.startTime>0&&(Date.now()-this.startTime >138000)||(lifes==0&&this.startTime >0&&this.invincible==0)){
            this.audio.stopAll();
            Framework.Game.goToLevel("over");
        }
        if(this.obstacle)
            for(i=0;i<this.obstacle.length;i++){
                this.obstacle[i].update();
                if(this.obstacle[i].passed&&(this.obstacle[i].position.x<=this.character.position.x+150)){
                    TOOLATE++;
                    console.log("Too late");
                    this.toast={time:Date.now()+500,str:"Too late"};
                    if(lifes>0)lifes-=1;
                    this.combo = 0;
                    this.obstacle[i].passed=0;
                    let game=this;
                    if(this.obstacle[i].dirc>0&&this.obstacle[i].dirc<=3||this.obstacle[i].dirc==5){
                        this.character.back(function(){
                            game.character.jog();
                        });
                    }else if(this.obstacle[i].dirc==0){
                        this.character.falldown(function(){
                            game.character.jog();
                        });
                    }else if(this.obstacle[i].dirc==-1||this.obstacle[i].dirc==4){
                        setTimeout(( () =>                        this.character.falldown(function(){
                            game.character.jog();
                        }) ),200);
                    }
                }
                    if(this.obstacle[i].passed&&this.obstacle[i].position.x<this.character.position.x + 350)console.log("!");//打擊判定有效時給的提示功能

                if(this.obstacle[i].position.x<=-1000||this.obstacle[i].alpha<=0)
                    delete this.obstacle.pop();
            }



        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                this.ball[i][j].update();
            }
        }
        //這邊4跟5的寫法看起來很髒,之後再改掉

        if (this.startTime > 0) {
            let timePassed = Date.now() - this.startTime;
            if (timePassed-150 >= this.tempo_obstacle[this.obstacleCouner] * 361) {
                if(this.sheet_obstacle[this.obstacleCouner]!=9){
                    if(this.sheet_obstacle[this.obstacleCouner]==2)this.obstacle.unshift(new Wall());
                    else if(this.sheet_obstacle[this.obstacleCouner]==-1)this.obstacle.unshift(new Gap());
                    else this.obstacle.unshift(new Obstacle());
                    this.obstacle[0].init();
                    this.obstacle[0].dirc=this.sheet_obstacle[this.obstacleCouner];
                    if(this.obstacle[0].dirc==1||this.obstacle[0].dirc==3) this.obstacle[0].position.y=450;
                    if(this.obstacle[0].dirc>2){
                        this.obstacle[0].holdTime=500*(this.tempo_obstacle[this.obstacleCouner+1]-this.tempo_obstacle[this.obstacleCouner]);
                        this.obstacle[0].width=this.obstacle[0].holdTime/4;
                        if(this.obstacle[0].dirc==4){
                            this.obstacle[0].thick=50;
                            this.obstacle[0].position={x:1600,y:770};
                        }
                        if(this.obstacle[0].dirc==5){
                            this.obstacle[0].thick=50;
                            this.obstacle[0].position={x:1600,y:570};
                        }
                    }
                    this.obstacle[0].start();
                }
                this.obstacleCouner++;
            }
            if (timePassed >= this.tempo_ball[this.ballCounter] * 361) {

                //之後會弄個bpm的const。這個this.tempo_ball全部*250的動作應該要在init時做完,否則影響遊戲順暢。
                //bpm是beats per minutes,一首120bpm的歌的8分音符應該是1秒2拍,1拍0.5秒,半拍則是250ms。
                dirc = this.sheet_ball[this.ballCounter];
                this.ballCounter++;
                
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
                    TOOLATE++;
                    this.toast={time:Date.now()+500,str:"Too late"};
                    if(lifes>0)lifes-=1;
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

        this.transparent.position.x=!this.transparent.position.x;//解決了LAG的問題
    },

    draw: function(parentCtx) {
        this.rootScene.draw();
        parentCtx.fillStyle ='black';
        parentCtx.fillRect(0,810,1600,90);
        




        //if(this.obstacle)this.obstacle.myDraw(parentCtx);
        parentCtx.fillStyle ='white';
        parentCtx.font="20px Verdana";
        parentCtx.textAlign = 'right';
        parentCtx.fillText("CHAIN", 1550,150);
        parentCtx.font="40px Verdana";
        parentCtx.textAlign = 'right';
        parentCtx.fillText(this.combo, 1550,200);
        if(this.toast.time>=Date.now()){
            parentCtx.fillStyle = 'rgba(255,255,255,'+((this.toast.time-Date.now())/500).toString()+')';
            parentCtx.font="40px Verdana";
            parentCtx.fillText(this.toast.str, 300,300+(this.toast.time-Date.now())/10);
        }
        for(i=0;i<lifes;i++)
            this.heart[i].draw();
        if(this.obstacle)
            for(i=0;i<this.obstacle.length;i++)this.obstacle[i].myDraw(parentCtx);
        if(this.wall)
            for(i=0;i<this.wall.length;i++)this.wall[i].myDraw(parentCtx);
        let sparkTime=this.hitSpark.time-Date.now();
        if(sparkTime>0){
            let circle = new Path2D();
            circle.arc(300, 500, 300-sparkTime, 0, 2 * Math.PI);
            
            if(this.hitSpark.dirc=='S')parentCtx.fillStyle='rgba(232,255,129,'+(sparkTime/1000).toString()+')';
            else if(this.hitSpark.dirc=='D')parentCtx.fillStyle='rgba(255,133,244,'+(sparkTime/1000).toString()+')';
            else if(this.hitSpark.dirc=='A')parentCtx.fillStyle='rgba(133,254,255,'+(sparkTime/1000).toString()+')';
            else parentCtx.fillStyle='rgba(255,255,108,'+(sparkTime/1000).toString()+')';
            parentCtx.fill(circle);
        }
    },

});
