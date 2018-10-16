## CN

类似 pick，但结果相反。

|参数名|类型|说明|
|-----|----|---|
|obj|object|源对象|
|filter|string array function|对象过滤器|
|返回值|object|目标对象|

```javascript
omit({a: 1, b: 2}, 'a'); // -> {b: 2}
omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
omit({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}