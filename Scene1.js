class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
        frameWidth: 16,
        frameHeight: 16
    })
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
        frameWidth: 32,
        frameHeight: 16
    })
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
        frameWidth: 32,
        frameHeight: 32
    })
    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
        frameWidth: 16,
        frameHeight: 16
    })
    this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
        frameWidth: 16,
        frameHeight: 16
    })
    this.load.spritesheet("player", "assets/spritesheets/player.png", {
        frameWidth: 16,
        frameHeight: 24
    })
}


this.powerUps = this.physics.add.group();
var maxObjects = 4;
for (var i = 0; i <= maxObjects; i++) {
    var powerUp = this.physics.add.sprite(16,16, "power-up");
    this.powerUps.add(powerUp);
    powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
}
if (Math.random() > 0.5) {
    powerUp.play("red");
  }
  else {
    powerUp.play("gray");
  }
  powerUp.setVelocity(100, 100);
  powerUp.setCollideWorldBounds(true);
  powerUp.setBounce(1);
}

create() {
    this.anims.create({
        key: "ship1_anim",
        frames: this.anims.generateFrameNumbers("ship"),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: "ship2_anim",
        frames: this.anims.generateFrameNumbers("ship2"),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: "ship3_anim",
        frames: this.anims.generateFrameNumbers("ship3"),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: "explode",
        frames: this.anims.generateFrameNumbers("explosion"),
        frameRate: 20,
        repeat: 0,
        hideOnComplete: true
      });
      this.anims.create({
        key: "red",
        frames: this.anims.generateFrameNumbers("power-up", {
            start: 0,
            end: 1
        }),
        frameRate: 20,
        repeat: -1,
      });
    
    this.anims.create({
        key: "gray",
        frames: this.anims.generateFrameNumbers("power-up", {
            start: 2,
            end: 3
        }),
        frameRate: 20,
        repeat: -1,
      });
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
}
