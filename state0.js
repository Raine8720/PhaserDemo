var demo = {}, centerX = 1500/2, centerY = 1000/2, sonic, speed = 4;

demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.image('sonic','assets/sprites/sonicRunCell.png');
    },
    create: function () {
        game.stage.backgroundColor = '#0099ff';
        console.log('state0');
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        sonic = game.add.sprite(centerX , centerY, 'sonic');
        sonic.anchor.x = 0.5;
        sonic.anchor.y = 0.5;
        //
        //or written using
        //sonic.anchor.setTo(0.5,0.5);
        
        
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            sonic.x +=speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            sonic.x -=speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            sonic.y +=speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            sonic.y -=speed;
        }
    }
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    
    
        addKeyCallback(Phaser.Keyboard.ONE,changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO,changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE,changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR,changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE,changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX,changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN,changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT,changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE,changeState, 9);
        addKeyCallback(Phaser.Keyboard.ZERO,changeState, 0);
}