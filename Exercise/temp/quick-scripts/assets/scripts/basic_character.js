(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/basic_character.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cad65LqsURFNYGmwR3cDmia', 'basic_character', __filename);
// scripts/basic_character.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        pointLabel: cc.Label,
        hpLabel: cc.Label,
        addButton: cc.Button
    },

    onLoad: function onLoad() {
        console.log('check 1');
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=basic_character.js.map
        