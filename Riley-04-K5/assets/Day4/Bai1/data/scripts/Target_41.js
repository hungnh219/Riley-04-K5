cc.Class({
    extends: cc.Component,

    properties: {
        pointLabel: cc.Label,
        imageSprite: cc.Sprite,
    },

    onLoad () {
        this.randomPoint = this.getRndInteger(1, 10);

        this.pointLabel.string = this.randomPoint;

        this.randomPosition();

        this.scheduleOnce(() => {
            this.node.destroy();
        }, this.getRndFloat(0.3, 0.8));

        // this.node.on("handleEndGame", this.endGame, this);
    },

    start () {

    },

    // update (dt) {},
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

    getRndFloat(min, max) {
        return Math.random() * (max - min) + min;
    },

    randomPosition() {
        // hardcode
        let newX = this.getRndInteger(-480, 480);
        let newY = this.getRndInteger(-320, 320);
        this.node.setPosition(newX, newY);
    },

    onDestroy() {
        // cc.log('node nay da bi huy');
    },

    onClick() {
        this.node.parent.parent.emit("shootTarget", this.randomPoint);
        this.pointLabel.string = "";
        this.imageSprite.spriteFrame = null;
        this.node.destroy();
    },

    // endGame() {
    //     this.pointLabel.string = "";
    //     this.imageSprite.spriteFrame = null;
    //     this.node.destroy();
    // }

    
});
