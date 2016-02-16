var test = require("unit.js");
var MovingAverage = require("../").MovingAverage;
var Comparison = require("../").Comparison;

console.info("MovingAverage 1");
var ma = new MovingAverage(4);

console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==null);

ma.addSample(0);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==0);

ma.addSample(100);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==50);

ma.addSample(200);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==100);

ma.addSample(1300);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==400);

ma.addSample(400);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==500);

ma.addSample(-1000);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==225);

ma.addSample(-5000);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==-1075);

ma.addSample(5500);
console.info("average: "+ma.getAverage());
test.assert(ma.getAverage()==-25);



console.info("MovingAverage 2");
ma = new MovingAverage(3, function(avg) {
	console.info("Average is " + avg);
});

ma.addSample(0.0001);
test.assert(Comparison.near(ma.getAverage(),0.0001,0.0001));

ma.addSample(0.0002);
test.assert(Comparison.near(ma.getAverage(),0.00015,0.0001));

ma.addSample(0);
test.assert(Comparison.near(ma.getAverage(),0.0001,0.0001));

ma.addSample(-0.0005);
test.assert(Comparison.near(ma.getAverage(),-0.0001,0.0001));
