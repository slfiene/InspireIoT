var five = require("johnny-five");
var Raspi = require('raspi-io');
var board = new five.Board({
    io: new Raspi()
});
var status;
var startTimer = setTimeout(() => {
    console.log("timeout beyond time");
}, 1500);

board.on("ready", function () {
    // Contact Mode: Normally Open (default!)
    var sw = new five.Switch('P1-7');

    sw.on("open", function () {
        console.log("open");
        let status = false;



        if (status == false) {
            startTimer();
        }


    });

    sw.on("close", function () {
        console.log("close");
        let status = true;

        if (status = true) {
            clearTimeout(startTimer);
        }

    });
});