// Click & Score
// tạo prefab cho mục tiêu -> điểm số random và hiển thị ở mục tiêu
// 


// game controller
// tính điểm
// random vị trí mục tiêu
cc.Class({
    extends: cc.Component,

    properties: {
        targetPrefab: cc.Prefab,
        scoreLabel: cc.Label,
        timeLabel: cc.Label,
        totalScoreLabel: cc.Label,

        startButton: cc.Button,
        resetButton: cc.Button,
        pauseButton: cc.Button,
        resumeButton: cc.Button,
    },

    onLoad () {
        // this.spawnSingleTarget();
        // cc.log('hehe');
        this.isPlaying = false;
        this.score = 0;
        this.scoreLabel.string = "Score: " + this.score;
        this.time = 60;

        this.totalScoreLabel.node.active = false;
        this.resetButton.node.active = false;
        this.pauseButton.node.active = false;
        this.resumeButton.node.active = false;

        this.node.on("shootTarget", this.calculateScore, this);
    },

    start () {
        
    },



    update (dt) {},

    spawnTargets() {
        this.scheduleOnce(() => {
            if (this.time == 0 || !this.isPlaying) {
                return;
            } else {
                this.spawnTargets()
            }

            for(let i = 0; i < this.getRndInteger(1, 3); i++) {
                this.spawnSingleTarget();
            }
        }, 1)
    },

    spawnSingleTarget() {
        let newNode = cc.instantiate(this.targetPrefab);
        this.node.addChild(newNode);
    },

    startGame() {
        this.isPlaying = true;
        this.totalScoreLabel.node.active = false;
        this.pauseButton.node.active = true;

        this.startTimer();
        this.spawnTargets();
        console.log(this.resetButton)
        console.log(this.resetButton.node)
        this.startButton.node.active = false;
        this.resetButton.node.active = false;
    },

    resetGame() {
        console.log('restart')
        this.time = 60;
        this.score = 0; 
        this.scoreLabel.string = "Score: " + this.score;
        this.timeLabel.string = this.time;

        // reset game when paused
        if (cc.director.isPaused) {
            cc.director.resume();
            this.resumeButton.node.active = false;
            this.pauseButton.node.active = true;
            this.resetButton.node.active = false;
            
            return;
        }

        // reset game when ended
        this.startGame();
    },

    startTimer() {
        // this.scheduleOnce(() => {
        //     if (this.time == 0) {
        //         this.resetButton.node.active = true;
        //         this.startButton.node.active = false;
        //         return;
        //     }
        //     this.time--;
        //     this.timeLabel.string = this.time;
        // }, 100);
        
        this.scheduleOnce(() => {
            if (this.time == 0) {
                this.resetButton.node.active = true;
                this.startButton.node.active = false;

                this.isPlaying = false;
                this.clearChildrenNodes();
                this.totalScoreLabel.string = "Total score: " + this.score;
                this.totalScoreLabel.node.active = true;
                return;
            } else {
                this.time--;
                this.timeLabel.string = this.time;

                this.startTimer();
            }
        }, 1)
    },

    calculateScore(data) {
        // this.score.string = 
        this.score += data;
        this.scoreLabel.string = "Score: " + this.score;
        console.log('calculate score: ', data)
    },

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },

    clearChildrenNodes() {
        console.log('check');
        console.log(this.node.children);
        this.node.children.forEach(child => {
            child.destroy();

            // dung de handle khi endgame, van giu nguyen cac target con hien thi tren man hinh game
            // child.emit("handleEndGame");
        });
    },

    pauseGame() {
        cc.director.pause();
        this.resumeButton.node.active = true;
        this.resetButton.node.active = true;
        this.pauseButton.node.active = false;
    },

    resumeGame() {
        cc.director.resume();
        this.resumeButton.node.active = false;
        this.resetButton.node.active = false;
        this.pauseButton.node.active = true;
    }
});
