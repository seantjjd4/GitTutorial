var MyBox2D = Framework.Class(Framework.Level, {
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
			for(i=0;i<this.ball[0].length;i++){
				if(this.ball[0][i].position.x<0){//代表這顆不在畫面內
					this.ball[0][i].start();
					break;
				}
			}
		},//測試能不能把球拿出來跑,之後會把整個click註解掉

        keydown:function(e){
        	if(e.key==='S'){
        		console.log("S");
        		//這裡準備要寫如何判定按下跟實際值的差,正在思考怎麼樣的算法會比較不吃效能。
        		//如果時間來不及可能就隨便寫了。
        	}
        },


		update : function () {
			for(i=0;i<4;i++){
				for(j=0;j<5;j++){
					this.ball[i][j].update();
				}
			}//這邊4跟5的寫法看起來很髒,之後再改掉

			//console.log(Date.now());
		},

		draw : function (parentCtx) {
			this.rootScene.draw();
		},
		
	});
