cc.Class({
    extends: cc.Component,

    properties: {
        enemyHp: cc.Label,
        enemyDefence: cc.Label,
    },

    onLoad () {
        this.health = 100;
        this.attack = this.randomNumber(30, 40);
        this.defense = this.randomNumber(5, 15);
        this.energy = 50;

        this.updateEnemyInfo();
        console.log('enemy dame: ', this.attack);
    },

    start () {
    },

    update (dt) {},

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

    attacked(dame) {
        this.health = this.health - (this.defense >= dame ? 0 : (dame - this.defense));

        if (this.health < 0) this.health = 0;

        this.updateEnemyInfo();
    },

    updateEnemyInfo() {
        this.enemyHp.string = this.health;
        this.enemyDefence.string = this.defense;
    },

    // getDame() {
    //     return this.attack;
    // },

    getHealth() {
        return this.health;
    },

    enemyAttack() {
        // attack logic

        return this.attack;
    }
});
