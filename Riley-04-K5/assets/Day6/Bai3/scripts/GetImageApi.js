let imageApis = [
    'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
    'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
    'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g',
]

cc.Class({
    extends: cc.Component,

    properties: {
        imageScollViewContent: cc.Node,
    },

    onLoad () {
        this.imageScollViewContent.removeAllChildren();

        this._loadImageByIndex(0)
    },

    getImage(imageSrc) {
        return new Promise(() => {
            this.scheduleOnce(() => {
                this.fetchImageToSprite(this.imageScollViewContent, imageSrc);
            }, 5)
        });
    },

    _loadImageByIndex(index) {
        if (index >= imageApis.length) {
            return;
        }

        this.fetchImageToSprite(this.imageScollViewContent, imageApis[index]);

        this.scheduleOnce(() => {
            this._loadImageByIndex(index + 1);
        }, 2);
    },

    fetchImageToSprite(contentNode, imageUrl) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", imageUrl, true);
        xhr.responseType = "blob"; // Cần dùng blob để xử lý ảnh

        xhr.onload = function () {
            if (xhr.status === 200) {
                let blob = xhr.response;
                let img = new Image();
                img.onload = function () {
                    let texture = new cc.Texture2D();
                    texture.initWithElement(img);
                    texture.handleLoadedTexture();

                    let spriteFrame = new cc.SpriteFrame(texture);

                    let newNode = new cc.Node("ImageNode");

                    let sprite = newNode.addComponent(cc.Sprite);
                    sprite.spriteFrame = spriteFrame;

                    newNode.width = 80;
                    newNode.height = 80;

                    contentNode.addChild(newNode);
                    // spriteNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                };
                img.src = URL.createObjectURL(blob);
            } else {
                console.error("Failed to load image, status:", xhr.status);
            }
        };

        xhr.onerror = function () {
            console.error("Network error while loading image.");
        };

        xhr.send();
    },
});
