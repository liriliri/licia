## CN

返回对象中第一个通过真值检测的属性键名。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|string|符合条件的键名|

```javascript
findKey({a: 1, b: 2}, function (val) {
    return val === 1;
}); // -> a
```