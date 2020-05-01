let config = {
    type: Phaser.CANVAS,
    width: 640, 
    height: 480,
    scene:[Menu,Instructions,Play,Score],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
};

let game = new Phaser.Game(config);

let keySPACE;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
const barricadeWidth = 128;
const barricadeHeight = 64;
const arrowWidth = 24;
const arrowHeight = 36;
const powerupWidth = 44;
const powerupHeight = 48;
let seconds = 0;
const textSpacer = 36; 