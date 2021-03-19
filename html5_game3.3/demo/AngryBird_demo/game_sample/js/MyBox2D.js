var MyBox2D = Framework.Class(Framework.Level, {
		load : function () {
			this.MyBox2D = new Framework.MyBox2D()
			this.MyBox2D.createWorld();


			//背景
			this.background = new Framework.Sprite(define.imagePath + 'background.png')
			this.background.position = {
				x : 800,
				y : 450
			};
		},
		
		initialize : function () {
			
		},

		update : function () {
			
		},

		draw : function (parentCtx) {
			
		},
		
	});
