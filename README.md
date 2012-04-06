# wilson.js

Wrapper for the Wilson Score Equation to calculate rank based on positive and negative votes. (Lower bound of Wilson score confidence interval for a Bernoulli parameter)

The goal with wilson.js was to provide reusable code for both the client and server using javascript.

## Usage

Include file:
<pre>
&lt;script src='wilson.js'&gt;&lt;/script&gt;
</pre>

The wilson object is now bound to the parent scope. Most of the time this will be _window.wilson_

```javascript
var objWithScore,
    obj = {
      name : 'Product 1',
      positive : 1337,
      negative : 123
    };

objWithScore = wilson.getScore(obj);

/*
    Output:
    
    {
        name : 'Product 1',
        positive : 1337,
        negative : 123,
        score: 0.9003915795238371  // this is the score
    }
*/
```

## API
### getScore([obj, array]);
Get the Wilson Score of an object or an array. Returns that object or array with score added.

