var test = require("unit.js");
var SpeedMeter = require("../").SpeedMeter;

var sm = new SpeedMeter();

console.info("SpeedMeter");

console.info("speed: "+sm.getCurrentSpeed());
test.assert(sm.getCurrentSpeed()==null);

sm.updateValue(100);
console.info("speed: "+sm.getCurrentSpeed());
test.assert(sm.getCurrentSpeed()==null);

sm.updateValue(200);
console.info("speed: "+sm.getCurrentSpeed());
test.assert(sm.getCurrentSpeed()>0);

setTimeout(function() {
	sm.updateValue(200);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()==0);
}, 1000);

setTimeout(function() {
	sm.updateValue(300);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()>95 && sm.getCurrentSpeed()<105);
}, 2000);

setTimeout(function() {
	sm.updateValue(600);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()>145 && sm.getCurrentSpeed()<155);
}, 4000);

setTimeout(function() {
	sm.updateValue(500);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()>-105 && sm.getCurrentSpeed()<-95);
}, 5000);

setTimeout(function() {
	sm.updateValue(-100);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()>-605 && sm.getCurrentSpeed()<-595);
}, 6000);

setTimeout(function() {
	sm.updateValue(-300);
	console.info("speed: "+sm.getCurrentSpeed());
	test.assert(sm.getCurrentSpeed()>-105 && sm.getCurrentSpeed()<-95);
}, 8000);

