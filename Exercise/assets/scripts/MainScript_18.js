cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
    },

    onLoad () {
        this.score = 0;
    },

    start () {
        this.displayScore();
    },

    update (dt) {},

    addScore() {
        this.score += 10;
        console.log(this.score);
        this.displayScore();
    },

    resetScore() {
        this.score = 0;
        console.log(this.score);
        this.displayScore();
    },

    displayScore() {
        this.scoreLabel.string = "Score: " + this.score;
    }
});
