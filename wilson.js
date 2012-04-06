var wilson = (function(contenxt){
  
  // wilson equation
  var calculate = function(p, n){
    return ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt((p * n) / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  }
  
  // calculate lower bound based on passing an array of objects
  var calcArr = function(arr){
    
  }
  
  // calculate lower bound based on passing an object
  var calcObj = function(obj){
    var pos = obj.positive || 0,
        neg = obj.negative || 0;
        
    //
    return calculate(pos, neg);
  }
  
  // sort the array (helper function
  var sort = function(arr){
    
  }
  
  // return 
  return {
    
    getLowerBound : function(obj){
      return calcObj(obj);
    },
    
    score : function(){
      var arg = arguments[0],
          func = function(){};
      
      //
      arg.length && (func = calcArr); // array of objects
      !arg.length && (func = calcObj); // object
      
      return func(arg);
    }
    
  }

})(this);