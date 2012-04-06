(function (context) {
  
  // Wilson equation
  var _calculate = function (p, n) {
    return ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt((p * n) / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  };
  
  // Calculate lower bound based on passing an array of objects
  var _calcArr = function (arr) {
    var len = arr.length,
        scoreArr = [];
    
    // Loop through array items and add lower bound
    // to the object in the array
    while(len--){
      // scoped block
      (function (i) {
        var obj = arr[i],
            pos = obj.positive || 0,
            neg = obj.negative || 0;
        
        // Set the score
        obj.score = _calculate(pos, neg);
        
        // Add obj to new array with lower bounds
        scoreArr.push(obj);
      })(len);
    }
    
    //
    return scoreArr;
  };
  
  // Calculate lower bound based on passing an object
  var _calcObj = function (obj) {
    var pos = obj.positive || 0,
        neg = obj.negative || 0;
        
    //
    return _calculate(pos, neg);
  };
  
  // Used to sort our array based on the lower pounds
  var _compare = function (a,b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  };
  
  // Sort the array (helper function
  var _sort = function (arr) {
    return arr.sort(_compare);
  };
  
  // Set wilson into the current context
  context.wilson = {
    
    // Get the lower bounds score of an object or array
    getScore : function () {
      var arg = arguments[0],
          func = function (){};
      
      //
      arg.length && (func = _calcArr); // array of objects
      !arg.length && (func = _calcObj); // object
      
      //
      return func(arg);
    },
    
    // Return a sorted array based on the lower bounds
    getSorted : function () {
      var arg = arguments[0],
          arr = this.getScore(arg);
          
      //
      return _sort(arr);
    }
  }

})(this);