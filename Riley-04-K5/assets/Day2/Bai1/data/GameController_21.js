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
        let playerDame = this.player.playerAttack();
        this.enemy.attacked(playerDame);

        this.winCheck();
        this.turn = Turn.Enemy;
        this.updateTurn();
        // this.enemy.updateEnemyInfo();
        this.enemyAttack();
    },

    playerSkill() {
        let playerDame = this.player.playerSkill();
        console.log(playerDame);
        console.log(typeof playerDame);
        if (!isNaN(playerDame)) {
            console.log('check');
            this.enemy.attacked(playerDame);

            this.winCheck();
            this.turn = Turn.Enemy;
            this.updateTurn();
            this.enemyAttack();
        }
    },

    playerRecover() {
        // attack logic
        this.turn = Turn.Enemy;
        this.updateTurn();
        this.player.playerRecover();
        this.enemyAttack();
        this.winCheck();
    },

    enemyAttack() {
        setTimeout(() => {
            // console.log('check');    
            let enemyDame = this.enemy.enemyAttack();
            this.player.attacked(enemyDame);

            this.winCheck();
            this.turn = Turn.Player;
            this.updateTurn();
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