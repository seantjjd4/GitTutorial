var Practice = function() {
	this.load = function() {
		this.pic = new Framework.Sprite(define.imagePath + 'yellow-background.jpg');
		this.pic.position = {
			x : 0,
			y : 0
		}
		this.pic.rotation = 0;
		this.position = {
			x : 0,
			y : 0
		}
		this.rotation = 0;
	};

	this.initialize = function() {

	};

	this.update = function() {
		this.position = {
			x : this.position.x + 1,
			y : this.position.y
		}
		this.rotation += 1;
		this.pic.position = this.position
		this.pic.rotation = this.rotation
	};

	this.draw = function(ctx){
		this.pic.draw(ctx)
	};
};
