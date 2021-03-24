var MyBox2D = Framework.Class(Framework.Level, {
		load : function () {
			this.ball=new Array();
			for(i=0;i<4;i++){
				this.ball[i]=new Array();
				for(j=0;j<5;j++){
					this.ball[i][j]=new Ball();
					this.ball[i][j].init('ball'+i.toString()+'.png');
					this.ball[i][j].position={x:-300,y:500};
					this.ball[i][j].run=0;//run為0時藏在畫面外不動,run為1時移到畫面中運動。
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
			this.ball[0][0].run=!this.ball[0][0].run;
		},//測試能不能把球拿出來跑,之後會註解掉
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
