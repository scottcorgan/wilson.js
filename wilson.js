(function(context){
  
  // Wilson equation
  var calculate = function(p, n){
    return ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt((p * n) / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  }
  
  // Calculate lower bound based on passing an array of objects
  var calcArr = function(arr){
    var len = arr.length,
        lbArr = [];
    
    // Loop through array items and add lower bound
    // to the object in the array
    while(len--){
      // scoped block
      (function(i){
        var obj = arr[i],
            pos = obj.positive || 0,
            neg = obj.negative || 0;
        
        // lb = 'Lower Bound'
        obj.lb = calculate(pos, neg);
        
        // add obj to new array with lower bounds
        lbArr.push(obj);
      })(len);
    }
    
    //
    return lbArr;
  }
  
  // Calculate lower bound based on passing an object
  var calcObj = function(obj){
    var pos = obj.positive || 0,
        neg = obj.negative || 0;
        
    //
    return calculate(pos, neg);
  }
  
  // Used to sort our array based on the lower pounds
  var compare = function(a,b) {
    if (a.lb < b.lb) return 1;
    if (a.lb > b.lb) return -1;
    return 0;
  }
  
  // Sort the array (helper function
  var sort = function(arr){
    return arr.sort(compare);
  }
  
  // Set wilson into the current context
  context.wilson = {
    
    // Get the lower bounds score of an object or array
    getScore : function(){
      var arg = arguments[0],
          func = function(){};
      
      //
      arg.length && (func = calcArr); // array of objects
      !arg.length && (func = calcObj); // object
      
      //
      return func(arg);
    },
    
    // Return a sorted array based on the lower bounds
    getSorted : function(){
      var arg = arguments[0],
          arr = this.getScore(arg);
          
      //
      return sort(arr);
    }
  }

})(this);