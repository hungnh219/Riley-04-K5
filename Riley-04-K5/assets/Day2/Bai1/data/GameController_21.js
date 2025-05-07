const Turn = {
    Player: 'player',
    Enemy: 'enemy'
}



cc.Class({
    extends: cc.Component,

    properties: {
        enemy: require("Enemy_21"),
        player: require("Player_21"),
        playerActions: cc.Layout,
        turnLabel: cc.Label,
        winnerNotification: cc.Label,
    },

    onLoad () {
        this.turn = Turn.Player;
        this.updateTurn();
    },

    start () {
    },

    update (dt) {},

    playerAttack() {
        // attack logic
        console.log('player attack')
        this.turn = Turn.Enemy;
        this.updateTurn();
        this.enemy.attacked(this.player.getDame());
        this.enemyAttack();
        this.winCheck();
    },

    enemyAttack() {
        setTimeout(() => {
            console.log('check');
            this.turn = Turn.Player;
            this.player.attacked(this.enemy.getDame());
            this.updateTurn();
            this.winCheck();
        }, 1500)    
    },

    updateTurn() {
        console.log(this.turn)
        if (this.turn == Turn.Enemy) {
            this.turnLabel.string = "Enemy's turn";
            this.playerActions.node.active = false;
        } else {
            this.turnLabel.string = "Player's turn";
            this.playerActions.node.active = true;
        }
    },

    winCheck() {
        if (this.enemy.getHealth() <= 0) {
            this.winnerNotification.string = "Player win!"
        }

        if (this.player.getHealth() <= 0) {
            this.winnerNotification.string = "Noob!"
        }
    }




});