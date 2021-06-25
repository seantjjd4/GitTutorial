//當有要加關卡時, 可以使用addNewLevel
//第一個被加進來的Level就是啟動點, 所以一開始遊戲就進入MyMenu
Framework.Game.addNewLevel({menu: new Menu()});
Framework.Game.addNewLevel({choice: new Choice()});

Framework.Game.addNewLevel({level1: new Level1()});
Framework.Game.addNewLevel({level8: new Level8()});
Framework.Game.addNewLevel({over: new Over()});

//讓Game開始運行
Framework.Game.start();