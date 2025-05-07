const GameState = {
    IDLE: 'Idle',
    RUNNING: 'Running',
};

cc.Class({
    extends: cc.Component,

    properties: {
        state: cc.Label,
    },

    onLoad () {
        this.gameState = GameState.IDLE
        this.state.string = this.gameState;
    },

    start () {

    },

    update (dt) {},

    changeState() {
        if (this.gameState == GameState.IDLE) {
            this.gameState = GameState.RUNNING;
        } else {
            this.gameState = GameState.IDLE;
        }

        this.state.string = this.gameState;
    },

    // displayState() {
    //     this.state.string = this.gameState;
    // }


});
