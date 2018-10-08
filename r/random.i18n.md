## CN

Produces a random number between min and max(inclusive).

|参数名|类型|说明|
|-----|----|---|
|min             |number |Minimum possible value|
|max             |number |Maximum possible value|
|[floating=false]|boolean|Float or not          |
|返回值          |number |Random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```