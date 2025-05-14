
cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad () {},

    start () {
        this.getServerTime().then((result) => {
            console.log(result);
        })

        let startTime = this.getLocalTime();

        for (let i = 0 ; i< 10 ; i++){
            const currentTime = this.getLocalTime();
            const latancy = currentTime - startTime;
            startTime = currentTime ;
            console.log('Độ trễ: ' + latancy )
        }
    },

    getLocalTime() {
        this.getServerTime().then((result) => {
            return result;
        })
    },

    // update (dt) {},
    getServerTime() {
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
            return new Promise((resolve) => {
                let dateTime = new Date(xmlHttp.getResponseHeader("Date")).getTime();
                if (dateTime) resolve(dateTime);
            })
    }
});
