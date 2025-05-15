cc.Class({
    extends: cc.Component,

    properties: {
  
    },

    // LIFE-CYCLE CALLBACKS:

    async onLoad () {
        this.startTime = await this.getLocalTime();


        for (let i = 0 ; i< 10 ; i++){
            const currentTime = await this.getLocalTime();
            const latancy = currentTime - this.startTime;
            this.startTime = currentTime;
            console.log('Độ trễ: ' + latancy )
        }
    },

    start () {

    },

    // update (dt) {},
    // getLocalTime() {
    //     return new Date().getTime()
    // },
    // let startTime = getLocalTime()
    // for (let i = 0 ; i< 10 ; i++){
    //         const currentTime = getLocalTime();
    //         const latancy = currentTime - startTime;
    //         startTime = currentTime ;
    //         console.log('Độ trễ: ' + latancy )
    // }

    async getLocalTime() {
        let xmlHttp;
        try {
          //FF, Opera, Safari, Chrome
          xmlHttp = new XMLHttpRequest();
        }
        catch (err1) {
          //IE
          try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
          }
          catch (err2) {
            try {
              xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
              //AJAX not supported, use CPU time.
              alert("AJAX not supported");
            }
        } }
        xmlHttp.open('HEAD',window.location.href.toString(),false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        // return new Date(xmlHttp.getResponseHeader("Date")).getTime(); 
        // return new Promise((resolve) => {
        //     if (new Date(xmlHttp.getResponseHeader("Date")).getTime()) resolve(new Date(xmlHttp.getResponseHeader("Date")).getTime())
        // })
        return new Date(xmlHttp.getResponseHeader("Date")).getTime(); 
    }
});
