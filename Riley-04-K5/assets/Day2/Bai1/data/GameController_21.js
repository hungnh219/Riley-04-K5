const Turn = {
    Player: 0,
    Enemy: 1
}



cc.Class({
    extends: cc.Component,

    properties: {
        enemy: require("Enemy_21"),
        player: require("Player_21"),
    },

    onLoad () {
        this.turn = Turn.Player;
    },

    start () {

    },

    update (dt) {},

    playerAttack() {
        // attack logic

        this.turn = Turn.Enemy;
    },

    enemyAttack() {
        // attack logic

        this.turn = Turn.Player;
    }




});
