exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var count = 0;
  	var result = '';
  	for (var i = 0, len = str.length; i < len; i++) {
  		if (str[i] !== str[i - 1]) { // First Occurrence.
  			count = 1;
  			result += str[i];
  		} else if (str[i] === str[i - 1] && count < amount) { // Occurrence less than amount.
  			count += 1;
  			result += str[i];
  		}
  	}
  	return result;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
  	var result = '';
  	for (var i = str.length - 1; i >= 0; i--) {
  		result += str[i];
  	}
  	return result;
  }
};
