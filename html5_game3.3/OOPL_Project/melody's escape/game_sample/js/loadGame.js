//立即執行函式, 並封裝所有變數避免衝突
var loadGameEnd;
(function(){
    //動態依序載入JS
    //ref: http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/01/15/4061.aspx
    var  importJS = function(jsConf, src, lookFor) {
        var headID = document.getElementsByTagName("head")[0]; 
        var newJs = document.createElement('script');
        newJs.type = 'text/javascript';
        newJs.src= jsConf[0].src;
        headID.appendChild(newJs);
        wait_for_script_load(jsConf, function() {
            jsConf.splice(0, 1);
            if(jsConf.length > 0) {
                importJS(jsConf, lookFor);
            }else
            {
                loadGameEnd = true;
            }
        });
    }

    var wait_for_script_load = function(jsConf, callback) {
        var interval = setInterval(function() {
            if (typeof jsConf[0].lookFor === 'undefined') {
                jsConf[0].lookFor = '';
            }

            if (jsConf[0].lookFor === '') {
                clearInterval(interval);
                callback();
            } else if (eval("typeof " + jsConf[0].lookFor) !== 'undefined') {
                    clearInterval(interval);
                    callback();      
                }
            }, 50);
    }

    //陣列和載入JS檔的順序相同, lookFor為在要載入的檔案中, 
    //有用到的全域變數, importJS這個function, 會在找到lookFor的變數後
    //才會繼續loading下一個檔案, 如果沒有需要lookFor, 則以空字串代表
    var listScript = 
    [
        { src: 'game_sample/js/Over.js', lookFor: 'Over' },
        { src: 'game_sample/js/define.js', lookFor: 'define' },
        { src: 'game_sample/js/menu.js', lookFor: 'Menu' },
        { src: 'game_sample/js/level1.js', lookFor: 'Level1' },
        { src: 'game_sample/js/level2.js', lookFor: 'Level2' },
        { src: 'game_sample/js/level3.js', lookFor: 'Level3' },
        { src: 'game_sample/js/level4.js', lookFor: 'Level4' },
        { src: 'game_sample/js/level7.js', lookFor: 'Level7' },
        { src: 'game_sample/js/level6.js', lookFor: 'Level6' },
        { src: 'game_sample/js/level5.js', lookFor: 'Level5' },
        { src: 'game_sample/js/level8.js', lookFor: 'Level8' },
        { src: 'game_sample/js/Character.js', lookFor: 'Character' },   
        { src: 'game_sample/js/choice.js', lookFor: 'Choice' },        
        { src: 'game_sample/js/Ball.js', lookFor: 'Ball' },   
        { src: 'game_sample/js/gap.js', lookFor: 'Gap' },      
        { src: 'game_sample/js/Wall.js', lookFor: 'Wall' },        
        { src: 'game_sample/js/obstacle.js', lookFor: 'Obstacle' },      
        { src: 'game_sample/js/mainGame.js'},
    ]

    importJS(listScript);
    
})();


    
