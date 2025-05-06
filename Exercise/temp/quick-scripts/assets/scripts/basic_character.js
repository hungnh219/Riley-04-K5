(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/basic_character.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cad65LqsURFNYGmwR3cDmia', 'basic_character', __filename);
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
        