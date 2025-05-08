cc.Class({
    extends: cc.Component,

    properties: {
       playerHp: cc.Label,
       playerEnergy: cc.Label,
       playerDefence: cc.Label,
    },

    onLoad () {
        this.health = 100;
        this.attack = this.randomNumber(10, 20);
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

    recover() {
        let updatedEnergy = this.energy + 20;

        if (updatedEnergy > 100) updatedEnergy = 100;

        this.energy = updatedEnergy;
        this.updatePlayerInfo();
    },

    updatePlayerInfo() {
        this.playerHp.string = this.health;
        this.playerEnergy.string = this.energy;
        this.playerDefence.string = this.defense;
    },

    getDame() {
        return this.attack;
    },

    getHealth() {
        return this.health;
    },

    getEnergy() {
        return this.energy;
    },

    skill() {
        this.energy -= 30;
        this.updatePlayerInfo();
    }

});
