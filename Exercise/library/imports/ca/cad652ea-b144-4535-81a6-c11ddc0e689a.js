"use strict";
cc._RF.push(module, 'cad65LqsURFNYGmwR3cDmia', 'MainScript_13');
// scripts/MainScript_13.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        pointLabel: cc.Label,
        hpLabel: cc.Label,
        addButton: cc.Button
    },

    onLoad: function onLoad() {
        this.name = 'Riley';
        this.baseHp = 10;
        this.hp = this.baseHp;
        this.point = 0;
    },
    start: function start() {
        this.nameLabel.string = "Name: " + this.name;
        this.pointLabel.string = "Point: " + this.point;
        this.hpLabel.string = "Hp: " + this.hp;
    },
    update: function update(dt) {},
    onUpdate: function onUpdate() {},
    onClick: function onClick() {
        this.updatePoint();

        if (this.point % 10 == 0) {
            this.updateHp();
        }
    },
    updatePoint: function updatePoint() {
        this.point++;
        this.pointLabel.string = "Point: " + this.point;
    },
    updateHp: function updateHp() {
        this.hp = this.baseHp + this.point / 10;
        this.hpLabel.string = "Hp: " + this.hp;
    }
});

cc._RF.pop();