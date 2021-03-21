var MyBox2D = Framework.Class(Framework.Level, {
		load : function () {
			this.box2D=new Framework.Box2D();
			this.box2D.createWorld();
			this.box2D.setContactListener();





			this.ball=new Ball();
			this.ball.init('hero.png');
			this.ball.position={x:1300,y:300};




			this.character=new Character();
			this.character.init('run.png',this.box2D);
			this.character.position={x:400,y:300};
			this.character.run();



			var ground=this.box2D.createSquareBody(1000,1.0,this.box2D.bodyType_Static);
			ground.SetPosition(new this.box2D.b2Vec2(0,24));
		},
		
		initialize : function () {
			this.rootScene.attach(this.character.pic);
			this.rootScene.attach(this.ball.pic);
		},

		update : function () {
			this.character.update();
			this.ball.update();
			//console.log(Date.now());
			this.box2D.draw();
		},

		draw : function (parentCtx) {
			this.box2D.draw();
			this.rootScene.draw();
		},
		
	});
