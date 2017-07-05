var five = require("johnny-five");
var Raspi = require('raspi-io');
var board = new five.Board({
    io: new Raspi()
});
var status;

function startTimer() {
    console.log("starting this up!");
}

board.on("ready", function () {
    // Contact Mode: Normally Open (default!)
    var sw = new five.Switch('P1-7');

    sw.on("open", function () {
        console.log("open");
        let status = false;

    });

    sw.on("close", function () {
        console.log("close");
        let status = true;

        if (status = true) {
            clearTimeout();
        }

    });
});