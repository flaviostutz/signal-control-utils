var SchmittTrigger = require("../").SchmittTrigger;

var st = new SchmittTrigger(function(value) {
	console.info("Triggered at " + value);
});

console.info("Triggering fixed");
st.setTriggerFixed(10);

st.updateValue(0);//trigger!
st.updateValue(5);
st.updateValue(7);
st.updateValue(10);//trigger!
st.updateValue(11);
st.updateValue(20);//trigger!
st.updateValue(0);//trigger!
st.updateValue(-100);//trigger!
st.updateValue(100);//trigger!
st.updateValue(20);//trigger!
st.updateValue(21);
st.updateValue(22);
st.updateValue(23);
st.updateValue(24);
st.updateValue(25);
st.updateValue(29);
st.updateValue(30);//trigger!

console.info("Triggering percent");
st.setTriggerPercent(10);

st.updateValue(0);//trigger!
st.updateValue(1);//trigger!
st.updateValue(1.05);
st.updateValue(1.09);
st.updateValue(1.1);//trigger!
st.updateValue(1.2);
st.updateValue(1.21);//should trigger, but due to double errors doesn't. all right...
st.updateValue(1.22);//trigger!
st.updateValue(-100);//trigger!
st.updateValue(-95);
st.updateValue(-91);
st.updateValue(-89);//trigger!
st.updateValue(-95);
st.updateValue(-99);//trigger!
st.updateValue(-0.000001);//trigger!
st.updateValue(0.000001);//trigger!
st.updateValue(0.00000108);
st.updateValue(0.00000095);
st.updateValue(0.00000109);
st.updateValue(0.0000011);//trigger!


