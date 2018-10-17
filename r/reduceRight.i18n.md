## CN

类似于 reduce，只是从后往前合并。

```javascript
reduceRight([[1], [2], [3]], function (a, b) { return a.concat(b) }, []); // -> [3, 2, 1]
```