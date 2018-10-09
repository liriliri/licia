## CN

将数字限定于指定区间。

|参数名|类型|说明|
|-----|----|---|
|n|number|要处理的数字|
|[lower]|number|下限|
|upper|number|上限|
|返回值|number|限定后的数字|

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```