## CN

Create an array of unique array values not included in the other given array.

|参数名|类型|说明|
|-----|----|---|
|arr      |array|Array to inspect            |
|[...rest]|array|Values to exclude           |
|返回值   |array|New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```