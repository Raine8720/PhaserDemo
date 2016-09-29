var demo = {}, centerX = 1500/2, centerY = 1000/2, sonic, speed = 6;

demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('sonic','assets/spritesheets/superPeelout.png',198.2,172);
        game.load.image('greenhill','assets/backgrounds/greenHill.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#0099ff';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0,0,2813,1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var greenHill = game.add.sprite(0,0,'greenhill'); 
        
        sonic = game.add.sprite(centerX , centerY, 'sonic');
        sonic.anchor.x = 0.5;
        sonic.anchor.y = -0.7;
        //
        //or written using
        //sonic.anchor.setTo(0.5,0.5);
        sonic.scale.setTo(2,2); //scales object
        
        game.physics.enable(sonic);
        sonic.body.collideWorldBounds = true;
        sonic.animations.add('peelout',[0,1,2,3]);
        
        
        game.camera.follow(sonic);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300,0,600,1000);
    },
    
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            sonic.scale.setTo(2,2);
            sonic.x +=speed;
            sonic.animations.play('peelout',25,true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            sonic.scale.setTo(-2,2); //flips image going left
            sonic.x -=speed;
            sonic.animations.play('peelout',25,true);
        }
        else{
            sonic.animations.stop('peelout');
            sonic.frame =0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            sonic.y +=speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            sonic.y -=speed;
            if(sonic.y < 300){
                sonic.y = 300;
            }
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