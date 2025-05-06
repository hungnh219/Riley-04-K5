cc.Class({
    extends: cc.Component,

    properties: {
        hpInput: cc.EditBox,
        manaInput: cc.EditBox,
        power: cc.Label,
    },

    onLoad () {
        this.hpInput.inputMode = cc.EditBox.InputMode.NUMERIC;
        this.manaInput.inputMode = cc.EditBox.InputMode.NUMERIC;
    },

    start () {

    },

    update (dt) {},

    calculatePower() {
        let hpValue = parseFloat(this.hpInput.string);
        let manaValue = parseFloat(this.manaInput.string);
        if (!isNaN(hpValue) && !isNaN(manaValue) && hpValue >= 0 && manaValue >= 0) {
            this.power.string = hpValue * manaValue;
        } else {
            this.power.string = "Wrong input value!!!";
        }
    },


});
