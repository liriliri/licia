## CN

Fill elements of array with value.

|参数名|类型|说明|
|-----|----|---|
|arr           |array |Array to fill           |
|val           |*     |Value to fill array with|
|start=0       |number|Start position          |
|end=arr.length|number|End position            |
|返回值        |array |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```