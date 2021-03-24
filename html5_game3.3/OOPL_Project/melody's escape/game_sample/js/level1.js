var Level1 = Framework.Class(Framework.Level, {
		load : function () {
			this.ball=new Array();
			for(i=0;i<4;i++){
				this.ball[i]=new Array();
				for(j=0;j<5;j++){
					this.ball[i][j]=new Ball();
					this.ball[i][j].init('ball'+i.toString()+'.png');
					this.ball[i][j].position={x:-300,y:500};
				}
			}//這邊4跟5的寫法看起來很髒,之後再改掉



			this.character=new Character();
			this.character.init('run.png');
			this.character.position={x:300,y:450};
			this.character.scale=0.6
			this.character.run();

			beatsCounter=0;
            this.sheet=[0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3];
            this.tempo=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];


		},
		
		initialize : function () {
			this.rootScene.attach(this.character.pic);
			
			for(i=0;i<4;i++){
				for(j=0;j<5;j++){
					this.rootScene.attach(this.ball[i][j].pic);
				}
			}//這邊4跟5的寫法看起來很髒,之後再改掉

		},


		click: function(e){
			beatsCounter=0;
			this.startTime=Date.now();
		},//測試能不能把球拿出來跑,之後會把整個click註解掉

        keydown:function(e){

			var timePassed=Date.now()-this.startTime;

			if(e.key==='S'){
                console.log(timePassed);
        	}
        },


		update : function () {
			for(i=0;i<4;i++){
				for(j=0;j<5;j++){
					this.ball[i][j].update();
				}
			}//這邊4跟5的寫法看起來很髒,之後再改掉

			var timePassed=Date.now()-this.startTime;

			if (timePassed>this.tempo[beatsCounter]* 750 ){//之後會弄個bpm的const。這個*750的動作應該要在init時做完,否則影響遊戲順暢。
				var dirc=this.sheet[beatsCounter];
				beatsCounter++;

	    		for(i=0;i<this.ball[dirc].length;i++){//這個for的功能是丟出一個球,dirc是球的方向
		    		if(this.ball[dirc][i].position.x<0){//代表第i顆不在畫面內
			    		this.ball[dirc][i].start();
			    		           console.log(timePassed);
				    	break;
				    }
		    	}

			}

			//console.log(Date.now());
		},

		draw : function (parentCtx) {
			this.rootScene.draw();
		},
		
	});
