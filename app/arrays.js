exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count ++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var appeared = {};
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (appeared[arr[i]] === 1) { // If appeared once.
        appeared[arr[i]] += 1;
        result.push(arr[i]);
      } else { // If never appeared.
        appeared[arr[i]] = 1;
      }
    }
    return result;
  },

  square : function(arr) {
    var squarred = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      squarred.push(arr[i] * arr[i]);
    }
    return squarred;
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }
    return occurrences;
  }
};
