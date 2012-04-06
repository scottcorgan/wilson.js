var wilson = (function(contenxt){
  
  // wilson equation
  var calculate = function(p, n){
    return ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt((p * n) / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  }
  
  //
  var calcArr = function(arr){
    
  }
  
  //
  var calcObj = function(obj){
    
  }
  
  //
  var sort = function(arr){
    
  }
  
  // return 
  return {
    
    getLowerBound : function(){
      var arg = arguments[0];
      
      //
      return calcObj(arg);
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