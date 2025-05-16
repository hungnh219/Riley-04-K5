class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];

    this.tasks.push(() => {
      console.log(`My name is ${this.name}`);
      return Promise.resolve();
    });

    setTimeout(() => this._runTasks(), 0);
  }

  _runTasks() {
    let promise = Promise.resolve();
    this.tasks.forEach(task => {
      promise = promise.then(() => task());
    });
  }

  eat(food) {
    this.tasks.push(() => {
      console.log(`I am eating ${food}`);
      return Promise.resolve();
    });
    return this;
  }

  sleep(ms) {
    this.tasks.push(() => {
      console.log('I am sleeping...');
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`After ${ms / 1000} seconds`);
          resolve();
        }, ms);
      });
    });
    return this;
  }
}

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.LazyMan = new LazyMan("Riley");
        this.LazyMan
            .eat("lunch")
            .sleep(5000)
            .eat("dinner")
            .sleep(3000)
            .eat("snack")
            .sleep(1000);
    },

    // update (dt) {},
});
