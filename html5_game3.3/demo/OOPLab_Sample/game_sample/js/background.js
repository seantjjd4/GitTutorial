var Background = function() {

    this.load = function(){
        this.yellow = new Framework.Sprite(define.imagePath + 'yellow-background.jpg');
        this.yellow.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        }
        this.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        }
    };

    this.initialize = function() {

	};

    this.update = function() {
	};

    this.draw = function(ctx){
		this.yellow.draw(ctx)
	};
};