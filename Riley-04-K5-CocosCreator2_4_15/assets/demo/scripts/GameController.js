import ItemDatabase from "./ItemDb";

cc.Class({
    extends: cc.Component,

    properties: {
        itemScrollViewContent: cc.Node,
        // prefabFactory: cc.Node,
        buyButton: cc.Node,
        logCallApiScrollViewContent: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prefabFactory = this.node.getComponent('PrefabFactory');
        this.itemScrollViewContent.removeAllChildren();
        this.clickedNode = null;
        this.buyButton.active = false;

    },

    async start () {
        this.safeApiCall = await this.circuitBreaker(this.fakeCallApi, 3, 3000);
    },

    fakeCallApi() {
        const delay = Math.random() < 0.5 ? 1000 : 5000;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.random();
                console.log("random", random);
                if (random <= 0.5) {
                    reject(new Error("API call failed"));
                } else {
                    resolve("API call success");
                }
            }, delay);
        });
    },

    async testCircuitBreaker() {
        this.logCallApiScrollViewContent.removeAllChildren();
        for (let i = 0; i < 10; i++) {
            try {
                const result = await this.safeApiCall();

                const logNode = new cc.Node();
                const label = logNode.addComponent(cc.Label);
                label.string = `API ${i + 1}: done!`;
                label.node.color = cc.Color.GREEN;
                label.fontSize = 20;
                this.logCallApiScrollViewContent.addChild(logNode);

                console.log("✅", result);

                this.initData();
            } catch (error) {
                const logNode = new cc.Node();
                const label = logNode.addComponent(cc.Label);
                label.string = `API ${i + 1}: failed`;
                label.node.color = cc.Color.RED;
                label.fontSize = 20;
                this.logCallApiScrollViewContent.addChild(logNode);

                console.log("❌", error.message);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    },

    initData() {
        this.itemScrollViewContent.removeAllChildren();
            ItemDatabase.forEach((item) => {
                const itemPrefab = this.prefabFactory.getItemPrefab(item.type);
                const itemNode = cc.instantiate(itemPrefab);
                itemNode.on(cc.Node.EventType.TOUCH_END, () => {
                    this.onItemClick(itemNode);
                }
                , this);
                itemNode.getComponent('ItemPrefab').initData(item);
                this.itemScrollViewContent.addChild(itemNode);
            });
    },

    onItemClick(clickedNode) {
        if (this.clickedNode === clickedNode) {
            const icon = clickedNode.getChildByName("ItemSprite");
            if (icon) {
                cc.tween(icon).to(0.2, { scale: 1 }).start();
            }
            this.clickedNode = null;
            this.buyButton.active = false;
            return;
        }

        if (this.clickedNode) {
            const oldIcon = this.clickedNode.getChildByName("ItemSprite");
            if (oldIcon) {
                cc.tween(oldIcon).to(0.2, { scale: 1 }).start();
            }
        }

        const newIcon = clickedNode.getChildByName("ItemSprite");
        if (newIcon) {
            cc.tween(newIcon).to(0.2, { scale: 1.4 }).start();
        }

        this.clickedNode = clickedNode;
        this.buyButton.active = true;
    },

    // update (dt) {},
    circuitBreaker(fn, timeoutThreshold, resetTimeout) {
        let state = "CLOSED"; // CLOSED, OPEN
        let lastFailureTime = 0;
        let failureCount = 0;

        return async (...args) => {
            const now = Date.now();

            if (state == "OPEN") {
                const timeSinceLastFailure = now - lastFailureTime;
                console.log("Time since last failure:", timeSinceLastFailure);
                if (timeSinceLastFailure > resetTimeout) {
                    state = "CLOSED";
                    failureCount = 0;
                } else {
                    console.warn("⛔ Circuit is still OPEN. Skipping execution.");
                    return "service closed";
                }
            }

            try {
                const result = await Promise.race([
                    fn(...args),
                    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), timeoutThreshold))
                ]);

                failureCount = 0;
                state = "CLOSED";
                return result;
            } catch (e) {
                failureCount++;
                console.error("⚠️ Circuit Breaker Error:", e.message);
                lastFailureTime = Date.now();
                if (failureCount >= timeoutThreshold) {
                    state = "OPEN";
                    console.warn("Circuit is OPEN due to multiple failures.");
                } else {
                    console.warn("Circuit is still CLOSED. Retrying...");
                }

                throw e;
            }
        };
    },

    handleBuy() {
        if (!this.clickedNode) return;

        const icon = this.clickedNode.getChildByName("ItemSprite");
        if (icon) {
            cc.tween(icon)
                .to(0.2, { scale: 0 })
                .call(() => {
                    this.clickedNode.destroy();
                    this.clickedNode = null;
                    this.buyButton.active = false;
                })
                .start();
        } else {
            this.clickedNode.destroy();
            this.clickedNode = null;
            this.buyButton.active = false;
        }
    },

    clearChildren() {
        this.itemScrollViewContent.removeAllChildren();
    }
});
