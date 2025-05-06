cc.Class({
    extends: cc.Component,

    properties: {
        valueSlider: cc.Slider,
        level: cc.Label,
        levelName: cc.Label,
    },

    onLoad () {
        this.displayLevel();
    },

    start () {
        this.updateLabelWithSlider();
        
        this.valueSlider.node.on('slide', this.updateLabelWithSlider, this);
    },

    update (dt) {},

    updateLabelWithSlider () {
        console.log('check1');
        this.displayLevel();
    },

    displayLevel() {
        let level = Math.round(this.valueSlider.progress * 9) + 1;
        this.level.string = "level: " + level;
        if (level <= 3) {
            this.levelName.string = "Beginner";
        } else if (level <= 7) {
            this.levelName.string = "Intermediate";
        } else {
            this.levelName.string = "Expert";
        }
    }
});
