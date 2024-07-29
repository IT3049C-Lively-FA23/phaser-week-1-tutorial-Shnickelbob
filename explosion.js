class Explosion extends Phaser.GameObjects.Sprite{
    constructor(screne,x,y){
        super(scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
    }
}