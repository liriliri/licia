## CN

Intersect two ranges.

|参数名|类型|说明|
|-----|----|---|
|a     |object|Range a              |
|b     |object|Range b              |
|返回值|object|Intersection if exist|

```javascript
intersectRange({start: 0, end: 12}, {start: 11, end: 13});
// -> {start: 11, end: 12}
intersectRange({start: 0, end: 5}, {start: 6, end: 7});
// -> undefined
```