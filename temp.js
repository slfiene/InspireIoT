var Raspi = require('raspi-io');
var five = require("johnny-five");
var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function() {
  // This requires OneWire support using the ConfigurableFirmata
  var thermometer = new five.Thermometer({
    controller: "DS18B20",
    pin: "P1-11"
  });

  thermometer.on("change", function() {
    console.log(this.celsius + "°C");
    // console.log("0x" + this.address.toString(16));
  });
});