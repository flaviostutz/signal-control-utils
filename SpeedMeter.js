'use strict'

function SpeedMeter() {
}

module.exports = SpeedMeter;
var _proto = SpeedMeter.prototype;

//VARIABLES
_proto._lastValue = null;
_proto._lastValueDate = null;
_proto._currentSpeed = null;

//METHODS
_proto.updateValue = function(value) {
	if(this._lastValue!=null) {
		console.info(">>>> " + value + "    -----      " + (value - this._lastValue) + "     ====    " + ((new Date().getTime() - this._lastValueDate.getTime())/1000.0));
		this._currentSpeed = (value - this._lastValue)/((new Date().getTime() - this._lastValueDate.getTime())/1000.0);
	}
	this._lastValue = value;
	this._lastValueDate = new Date();
}

_proto.getCurrentSpeed = function() {
	return this._currentSpeed;
}