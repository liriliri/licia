## CN

Split array into groups the length of given size.

|参数名|类型|说明|
|-----|----|---|
|arr   |array |Array to process    |
|size=1|number|Length of each chunk|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```