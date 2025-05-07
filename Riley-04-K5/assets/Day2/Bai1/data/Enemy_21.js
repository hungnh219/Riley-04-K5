cc.Class({
    extends: cc.Component,

    properties: {
        enemyHp: cc.Label,
    },

    onLoad () {
        this.health = 100;
        this.attack = this.randomNumber(10, 20);
        this.defense = this.randomNumber(5, 15);
        this.energy = 50;
    },

    start () {

    },

    update (dt) {},

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

    check() {
        console.log('321');
    }
});
