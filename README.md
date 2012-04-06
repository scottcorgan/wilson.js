# wilson.js

Wrapper for the Wilson Score Equation to calculate rank based on positive and negative votes.

Based on [How Not To Sort By Average Rating](http://d.pr/ka8D)
(Lower bound of Wilson score confidence interval for a Bernoulli parameter)

### Why would I use this?
If you are doing any kind of voting or ranking based off a thumbs up or thumbs down logic, the best and most effective way to display the list of items in a relevant order is with this equation.

## Usage

Client Side:
<pre>
&lt;script src='wilson.js'&gt;&lt;/script&gt;
</pre>

Node.js:

```javascript
var wilson = require('wilson');
```

### Usage
For the client side, he wilson object is now bound to the parent scope. Most of the time this will be ` window.wilson `
For Node.js this works as a normal module.

```javascript
var scored,
    obj = {
      name : 'Product 1',
      positive : 1337,
      negative : 123
    };

scored = wilson.score(obj);

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
### score([obj, array])
Get the Wilson Score of an object or an array. Returns that object or array with score added.
### sort(array)
Sort an array based on it's Wilson Score. If objects in array don't already have the score, it will be calculated and added.

