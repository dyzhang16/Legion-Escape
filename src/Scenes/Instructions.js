class Instructions extends Phaser.Scene{
    constructor(){
            super('instructionScene');
    }

    preload(){
        this.load.image('shieldimage', './assets/characterShield.png');
        this.load.image('barricade','./assets/barricade.png');
        this.load.image('arrow','./assets/arrow.png');
    }
    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.text(centerX,game.config.height*3/20, 'Avoid obstacles by using the mouse!').setOrigin(0.5);
        this.add.image(game.config.width*1/10,game.config.height*1/5,'barricade').setScale(0.75,0.75).setOrigin(0,0); 
        this.add.image(centerX,game.config.height*1/5,'arrow').setOrigin(0,0);
        //add roman army image 
        this.add.text(centerX,game.config.height*7/20, 'Use shield by left clicking to deflect arrows!').setOrigin(0.5);
        this.add.image(centerX,game.config.height*9/20,'shieldimage').setScale(0.75,0.75);   
        //powerup instructions if we add powerups
        this.add.text(centerX,game.config.height*17/20, 'Survive as long as you can! Press Space to continue...').setOrigin(0.5);                                      
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){           //leftClick transition
            this.scene.start('playScene');
        }
    }
}