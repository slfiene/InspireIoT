var Raspi = require('raspi-io');
var five = require("johnny-five");
var board = new five.Board({
    io: new Raspi()
});


board.on("ready", function() {
  // Contact Mode: Normally Open (default!)
  var sw = new five.Switch(7);

  sw.on("open", function() {
    console.log("open");
  });

  sw.on("close", function() {
    console.log("close");
  });
});