# signal-control-utils
Utilities for signal processing and control theory in Javascript<br>
<br>
Inside this library you will find these utilities:<br>

1. Comparison<br>
Perform comparisons. Currently it has only the method "boolean near(value1, value2, diff)"
<code><pre>var Comparison = require("signal-control-utils").Comparison;
if(Comparison.near(10,11,2)) {
  console.info("10 is near 11 by less than 2!");
}</pre></code>

2. MovingAverage<br>
Stablish a fixed size moving average, add samples and get the current average.
<code><pre>var MovingAverage = require("signal-control-utils").MovingAverage;
var speedAverager = new MovingAverage(10, function(avg) {console.info("A new sample was added. Current average is " + avg)});
speedAverager.addSample(12);
speedAverager.addSample(5);
speedAverager.addSample(21);
console.info("Final average: " + speedAverage.getAverage());
</pre></code>

3. SchmittTrigger<br>
https://en.wikipedia.org/wiki/Schmitt_trigger
<code><pre>var SchmittTrigger = require("signal-control-utils").SchmittTrigger;
	portSchmittTrigger = new SchmittTrigger(
			function(value) {
        console.info("Trigger activated at " + value);
			});
	portSchmittTrigger.setTriggerFixed(10);//only trigger on changes more than 10 from the last triggered value
  portSchmittTrigger.updateValue(0);//will trigger as this is the first call
  portSchmittTrigger.updateValue(4);//will not trigger
  portSchmittTrigger.updateValue(10);//will trigger
  portSchmittTrigger.updateValue(20);//will trigger
  portSchmittTrigger.updateValue(25);//will not trigger</pre></code>

4. SpeedMeter<br>
Measures speed based on positions set during time.
<code><pre>var SpeedMeter = require("signal-control-utils").SpeedMeter;
	speedMeter = new SpeedMeter();
  speedMeter.updateValue(0);//position 0
  speedMeter.updateValue(4);//position 4
  speedMeter.updateValue(20);//position 20
  speedMeter.updateValue(25);//position 25
  console.info("Average speed is " + speedMeter.getCurrentSpeed());</pre></code>

# More
See more usage examples at the "test" directory.<br>
A complete example of how this can be used can be found https://github.com/flaviostutz/rpi-office-toys<br>
