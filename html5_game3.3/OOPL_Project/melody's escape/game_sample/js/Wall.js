var Wall = function() {
    Object.defineProperty(this, 'position', {
        get: function() {
            return this.pic.position;
        },
        set: function(newValue) {
            this.pic.position = newValue;
        },
    });
    this.start = function() {
        this.isOK = true;
        //還沒被踢
        this.now = Date.now() + 1400;
    }

    this.init = function(sprite) {
        this.pic = new Framework.AnimationSprite({
            url: [define.imagePath + 'wall.png', define.imagePath + 'wall1.png', define.imagePath + 'wall2.png', define.imagePath + 'wall3.png', ],
            loop: false,
            speed: 2
        });
        this.pic.scale=1.5;
        this.pic.stop();
    }
    ;
    this.destroy = function() {
        this.isOK = false;
        this.pic.start({
             from: 0,
             to: 3,
             loop: false,speed:1
        });
    };
    this.update = function() {
        if (this.now > 0) {
            if (this.isOK) {
                var tmp = this.now - Date.now()
                this.pic.position.x = tmp + 300;
            } else {
                var tmp = this.now - Date.now()
                this.pic.position.x++;
            }
        }
    };
    this.draw = function() {
        this.pic.draw();
    };
};
