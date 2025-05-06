const GameState = {
    IDLE: 'idle',
    START: 'start',
    END: 'end',
};

cc.Class({
    extends: cc.Component,

    properties: {
        notification: cc.Label,
    },


    onLoad () {
        this.gameState = GameState.IDLE;
        this.notification.string = this.handleGameState();
    },

    start () {

    },

    update (dt) {},

    startGame() {
        this.gameState = GameState.START;
        this.notification.string = this.handleGameState();
    },

    endGame() {
        this.gameState = GameState.END;
        this.notification.string = this.handleGameState();
    },

    handleGameState() {
        switch (this.gameState) {
            case GameState.IDLE:
                return "Welcome!";
            case GameState.START:
                return "Game is starting...";
            case GameState.END:
                return "Goodbye!";
            default:
                return "...";
        }
    }
});
