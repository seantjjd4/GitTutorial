var Choice = Framework.Class(Framework.Level , {


	load: function(){
        var link = [define.imagePath+'transparent.png', define.imagePath+'transparent.png']
        this.transparent=new Framework.AnimationSprite({url: link, loop: true});

        this.background = new Framework.Sprite(define.imagePath + 'choiceback.png');
        this.background.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };

        this.background.scale = 0.48;

        this.rootScene.attach(this.background);
        this.rootScene.attach(this.transparent);
        this.transparent.start();

	},

    initialize: function() {
        this.song1 = false;
        this.song2 = false;
        this.song3 = false;
        this.song4 = false;
        this.song5 = false;
        this.song6 = false;
        this.song7 = false;
        this.song8 = false;
        this.reselectTouch = false;
    },

    update: function() {
        this.rootScene.update();
    },

    mousemove : function(e){
        if(this.background){
            if(level_relax){
                if(e.x > 70 && e.x < 1520 && e.y > 90 && e.y < 121){
                    this.song1 = true;
                }else if(e.x > 70 && e.x < 1520 && e.y > 130 && e.y < 161){
                    this.song2 = true;
                }else{
                    this.song1 = false;
                    this.song2 = false;
                }
            }else if(level_midium){
                if(e.x > 70 && e.x < 1520 && e.y > 90 && e.y < 121){
                    this.song3 = true;
                }else if(e.x > 70 && e.x < 1520 && e.y > 130 && e.y < 161){
                    this.song4 = true;
                }else{
                    this.song3 = false;
                    this.song4 = false;
                }
            }else if(level_intense){
                if(e.x > 70 && e.x < 1520 && e.y > 90 && e.y < 121){
                    this.song5 = true;
                }else if(e.x > 70 && e.x < 1520 && e.y > 130 && e.y < 161){
                    this.song6 = true;
                }else{
                    this.song5 = false;
                    this.song6 = false;
                }
            }else if(level_overload){
                if(e.x > 70 && e.x < 1520 && e.y > 90 && e.y < 121){
                    this.song7 = true;
                }else if(e.x > 70 && e.x < 1520 && e.y > 130 && e.y < 161){
                    this.song8 = true;
                }else{
                    this.song7 = false;
                    this.song8 = false;
                }
            }

            if(e.x > 1240 && e.x < 1515 && e.y > 812 && e.y < 834){
                this.reselectTouch = true;
            }else{
                this.reselectTouch = false;
            }
        }
    },

    click: function (e) {
        if (this.song1){
            Framework.Game.goToLevel('level1');
        }
        // else if (this.song2){
        //     Framework.Game.goToLevel('level2');
        // }else if (this.song3){
        //     Framework.Game.goToLevel('level3');
        // }else if (this.song4){
        //     Framework.Game.goToLevel('level4');
        // }else if (this.song5){
        //     Framework.Game.goToLevel('level5');
        // }else if (this.song6){
        //     Framework.Game.goToLevel('level6');
        // }else if (this.song7){
        //     Framework.Game.goToLevel('level7');
         //}
         else if (this.song8){
             Framework.Game.goToLevel('level8');
         }
        if (this.reselectTouch){
            Framework.Game.goToPreviousLevel();
        }
        console.log(e.x, e.y);
    },

    draw:function(parentCtx){
        parentCtx.strokeStyle = 'rgb(203,209,223)';
        parentCtx.lineWidth = 4;
        parentCtx.strokeRect(42,62,1508,788);
        parentCtx.fillStyle = 'rgb(43,78,129)';
        parentCtx.fillRect(45,65,1502,782);
        parentCtx.fillStyle = 'rgb(255,255,255)';
        parentCtx.font = '18pt monospace';
        parentCtx.fillText('music selection',60,50);

        if(this.reselectTouch){
            parentCtx.fillStyle = 'rgb(255,255,255)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillText('reselect difficulty',1240,830);
        }else{
            parentCtx.fillStyle = 'rgb(200,200,200)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillText('reselect difficulty',1240,830);
        }
        


        if(level_relax){
            parentCtx.fillStyle = 'rgb(255,255,255)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillStyle = 'rgb(200,200,200)';
            parentCtx.fillText('little star.mp3', 80,110);
            parentCtx.fillText('dcdcdcdcdcdcdcdcd.mp3', 80,150);

            if (this.song1){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,88,1455,30);
            }else if (this.song2){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,128,1455,30);
            }
        }
        if(level_midium){
            parentCtx.fillStyle = 'rgb(255,255,255)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillStyle = 'rgb(200,200,200)';
            parentCtx.fillText('fefefefefefe.mp3', 80,110);
            parentCtx.fillText('ghghghghghgh.mp3', 80,150);

            if (this.song3){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,88,1455,30);
            }else if (this.song4){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,128,1455,30);
            }
        }
        if(level_intense){
            parentCtx.fillStyle = 'rgb(255,255,255)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillStyle = 'rgb(200,200,200)';
            parentCtx.fillText('ijijijijijiji.mp3', 80,110);
            parentCtx.fillText('klklklklklkl.mp3', 80,150);

            if (this.song5){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,88,1455,30);
            }else if (this.song6){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,128,1455,30);
            }
        }
        if(level_overload){
            parentCtx.fillStyle = 'rgb(255,255,255)';
            parentCtx.font = '18pt monospace';
            parentCtx.fillStyle = 'rgb(200,200,200)';
            parentCtx.fillText('nmnmnmnmnmn.mp3', 80,110);
            parentCtx.fillText('KING.mp3', 80,150);

            if (this.song7){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,88,1455,30);
            }else if (this.song8){
                parentCtx.strokeStyle = 'rgb(200,200,200)';
                parentCtx.lineWidth = 2;
                parentCtx.strokeRect(68,128,1455,30);
            }
        }
    },
});
