## CN

计算两个区间的交集。

|参数名|类型|说明|
|-----|----|---|
|a|object|区间 a|
|b|object|区间 b|
|返回值|object|如果存在区间交集，返回它|

```javascript
intersectRange({start: 0, end: 12}, {start: 11, end: 13});
// -> {start: 11, end: 12}
intersectRange({start: 0, end: 5}, {start: 6, end: 7});
// -> undefined
```