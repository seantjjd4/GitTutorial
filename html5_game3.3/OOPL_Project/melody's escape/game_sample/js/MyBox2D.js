var MyBox2D = Framework.Class(Framework.Level, {
		load : function () {



			this.ball=new Ball();
			this.ball.init('hero.png');
			this.ball.position={x:1300,y:500};




			this.character=new Character();
			this.character.init('run.png',this.box2D);
			this.character.position={x:300,y:450};
			this.character.scale=0.6
			this.character.run();




		},
		
		initialize : function () {
			this.rootScene.attach(this.character.pic);
			this.rootScene.attach(this.ball.pic);
		},

		update : function () {
			this.ball.update();
			//console.log(Date.now());
		},

		draw : function (parentCtx) {
			this.rootScene.draw();
		},
		
	});
