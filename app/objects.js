exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var result = [];
  	Object.getOwnPropertyNames(obj).forEach(function(value) {
  		result.push(value + ': ' + obj[value]);
  	});
  	return result;
  }
};
