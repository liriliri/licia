## CN

计算字符串集的缩写集合。

|参数名|类型|说明|
|-----|----|---|
|...arr|string|字符串集|
|返回值|object|缩写集合|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```