exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var bin = num.toString(2);
  	var len = bin.length;
  	return Number(bin[len - bit]);
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	var bin = num.toString(2);
  	var len = bin.length;
  	if (len < 8) {
  		bin = 0 * (8 - len) + bin;
  	}
  	return bin;
  },

  multiply: function(a, b) {

  }
};
