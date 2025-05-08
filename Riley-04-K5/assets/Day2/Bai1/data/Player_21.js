cc.Class({
    extends: cc.Component,

    properties: {
       playerHp: cc.Label,
       playerEnergy: cc.Label,
       playerDefence: cc.Label,
    },

    onLoad () {
        this.health = 100;
        this.attack = this.randomNumber(30, 40);
        this.defense = this.randomNumber(5, 15);
        this.energy = 50;

        this.updatePlayerInfo();

        console.log('play dame: ', this.attack);
    },  

    start () {
    },

    update (dt) {
    },

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

    attacked(dame) {
        this.health = this.health - (this.defense >= dame ? 0 : (dame - this.defense));

        if (this.health < 0) this.health = 0;
        this.updatePlayerInfo();
    },

    updatePlayerInfo() {
        this.playerHp.string = this.health;
        this.playerEnergy.string = this.energy;
        this.playerDefence.string = this.defense;
    },

    getHealth() {
        return this.health;
    },

    skill() {
        this.energy -= 30;
        this.updatePlayerInfo();
    },

    playerAttack() {
        // attack logic

        return this.attack;
    },

    playerSkill() {
        if (this.energy < 30) {
            return;
        }

        this.energy -= 30;
        this.updatePlayerInfo();
        return this.attack * 2;
    },

    playerRecover() {
        this.energy = this.energy + 20 > 100 ? 100 : this.energy + 20;
        this.updatePlayerInfo();
    }
});
