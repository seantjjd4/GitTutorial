var Over = Framework.Class(Framework.Level, {
    load: function() {
        this.heart = new Array();
        this.transparent=new Framework.Sprite(define.imagePath+'transparent.png');
        for (let i = 0; i < lifes; i++) {
            this.heart[i]=new Framework.Sprite(define.imagePath+'heart.png');
            this.heart[i].position = {
                x: 1000+125*i,
                y: 300
            };
            this.heart[i].scale=0.1;
        }
    },

    initialize: function() {
        
        
        this.rootScene.attach(this.transparent);
        
    },

    click: function(e) {

    },

    keydown: function(e) {

    },

    update: function() {

    },

    draw: function(parentCtx) {

        parentCtx.fillStyle = 'rgb(46,82,138)';
        parentCtx.fillRect(0,0,1600,900);
        this.rootScene.draw();
        for (let i = 0; i < lifes; i++) {
            this.heart[i].draw();
        }
        parentCtx.fillStyle = 'rgb(203,209,223)';
        parentCtx.textBaseline = 'top';
     
        parentCtx.textAlign = 'left';
        parentCtx.font = '50pt Microsoft YaHei';
        parentCtx.fillText('Difficulty:', 950,500);
        
        parentCtx.fillText('Score:',100,250);
        parentCtx.fillText('Max Chain:',100,350);
        parentCtx.font = '30pt Microsoft YaHei';
        parentCtx.fillText('Timing',100,500);
        parentCtx.strokeStyle = 'rgb(203,209,223)';
        parentCtx.strokeRect(100,550,400,170);
        parentCtx.fillText('Hit:',110,560);
        parentCtx.fillText('Too late:',110,610);
        parentCtx.fillText('Error:',110,660);

        parentCtx.font = '80pt Microsoft YaHei';


        parentCtx.textAlign = 'center';
        parentCtx.fillText('(Song Title)', 800,50);
        parentCtx.textAlign = 'right';
        parentCtx.font = '50pt Microsoft YaHei';
        parentCtx.fillText(maxCombo,800,350);
        parentCtx.fillText('Relaxing', 1600,500);
    },

});