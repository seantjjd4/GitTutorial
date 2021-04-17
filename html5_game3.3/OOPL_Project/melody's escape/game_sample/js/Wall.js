var Wall = function() {
    Object.defineProperty(this, 'position', {
        get: function() {
            return this.wall.position;
        },
        set: function(newValue) {
            this.wall.position = newValue;
        },
    });
    this.start = function() {
        this.isOK = true;
        //還沒被踢
        this.now = Date.now() + 1400;
    }

    this.init = function(sprite) {
        this.wall = new Framework.Sprite(define.imagePath + 'wall.png');
        // this.wall_destroyed = new Framework.AnimationSprite({
        //     url: [define.imagePath + 'wall.png', define.imagePath + 'wall1.png', define.imagePath + 'wall2.png', define.imagePath + 'wall3.png', ],
        //     loop: false,
        //     speed: 2
        // });
        this.wall.scale=1.5;
        // this.wall_destroyed.scale = 1.5;
        // this.wall.stop();
    };

    this.update = function() {
        if (this.isOK){
            if (this.now > 0) {
                this.now = this.now - Date.now();
                this.wall.position.x = this.now + 300;
            } else {
                // this.now = this.now - Date.now();
                // this.wall_destroyed.position = this.wall.position;
                // this.wall_destroyed.start({from: 0, to: 3, loop: false,speed:1});
                this.isOK = false;
            }
        }
    };
    this.draw = function() {
        this.wall.draw();
        // this.wall_destroyed.draw();
    };
};
