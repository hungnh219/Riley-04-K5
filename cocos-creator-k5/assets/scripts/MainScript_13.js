cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        pointLabel: cc.Label,
        hpLabel: cc.Label,
        addButton: cc.Button,
    },

    onLoad () {
        this.name = 'Riley';
        this.baseHp = 10;
        this.hp = this.baseHp;
        this.point = 0;
    },

    start () {
        this.nameLabel.string = "Name: " + this.name;
        this.pointLabel.string = "Point: " + this.point;
        this.hpLabel.string = "Hp: " + this.hp;
    },

    update (dt) {
    },

    onUpdate() {
    },  

    onClick() {
        this.updatePoint();

        if (this.point % 10 == 0) {
            this.updateHp();
        }   
    },

    updatePoint() {
        this.point++;
        this.pointLabel.string = "Point: " + this.point;
    },

    updateHp() {
        this.hp = this.baseHp + this.point / 10;
        this.hpLabel.string = "Hp: " + this.hp;
    }
});
