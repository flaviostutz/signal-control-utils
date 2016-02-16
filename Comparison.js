'use strict'

function Comparison() {
}

module.exports = Comparison;

Comparison.near = function(value1, value2, absoluteDiff) {
	return Math.abs(value1-value2) <= absoluteDiff||0;
}
