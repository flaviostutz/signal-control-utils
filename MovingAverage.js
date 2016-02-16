'use strict'

function MovingAverage(numberOfSamples, callbackOnAddSample) {
	this._samples = new Array(numberOfSamples);
	this._lastResultValid = false;
	this._n = 0;
	this._callbackOnAddSample = callbackOnAddSample;
}

module.exports = MovingAverage;
var _proto = MovingAverage.prototype;

//VARIABLES
_proto._n = null;
_proto._samples = null;
//avoid recalculating results that are already known
_proto._lastResultValid = false;
_proto._lastResult = null;
_proto._callbackOnAddSample = null;

//METHODS
_proto.addSample = function(value) {
	if (this._n < this._samples.length) {
		this._n++;
	} else {
		//put new sample in tail
		for (var i = 0; i < this._samples.length-1; i++) {
			this._samples[i] = this._samples[i+1];
		}
	}
	this._samples[this._n-1] = value;
	this._lastResultValid = false;
	if(this._callbackOnAddSample!=null) {
		this._callbackOnAddSample(this.getAverage());
	}
}

_proto.getAverage = function() {
	if(this._n==0) return null;
	if(!this._lastResultValid) {
		var sum = 0;
		for (var i = 0; i < this._n; i++) {
			sum += this._samples[i];
		}
		this._lastResult = sum/this._n;
		this._lastResultValid = true;
	}
	return this._lastResult;
}

_proto.getNumberOfSamples = function() {
	return this._n;
}

_proto.reset = function() {
	this._samples = new Array(numberOfSamples);
	this._n = 0;
	this._lastResultValid = false;
}
