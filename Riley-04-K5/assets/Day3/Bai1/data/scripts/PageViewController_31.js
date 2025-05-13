// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pageView: cc.PageView,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.pageView.node.on('page-turning', this.onPageTurned, this);

        // // Gọi lần đầu khi load scene
        // this.togglePageActive(this.pageView.getCurrentPageIndex());
    },

    start () {

    },

    // update (dt) {},
    onPageTurned() {
        const currentIndex = this.pageView.getCurrentPageIndex();
        this.togglePageActive(currentIndex);
        console.log("Page turned to index:", currentIndex);
    },

    togglePageActive(currentIndex) {
        const pages = this.pageView.getPages();

        pages.forEach((page, index) => {
            if (index == currentIndex) {
                page.active = true;
            } else {
                page.active = false;
            }
        });
    }
});
