"use strict";
cc._RF.push(module, 'cad65LqsURFNYGmwR3cDmia', 'basic_character');
// scripts/basic_character.js

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
        this.hp = 10;
        this.point = 0;

        this.nameLabel.string = "Name: " + this.name;
        this.pointLabel.string = "Point: " + this.point;
        this.hpLabel.string = "Hp: " + this.hp;
    },
    start: function start() {},
    update: function update(dt) {
        // this.nameLabel.string = "Name: " + this.name + dt;
    },
    onUpdate: function onUpdate() {},
    onClick: function onClick() {
        console.log('heheh');
        this.point++;
        console.log(this.point);
        this.pointLabel.string = "Point: " + this.point;
        if (this.point % 10 == 0) {
            this.hp++;
            this.hpLabel.string = "Hp: " + this.hp;
        }
    }
});

cc._RF.pop();