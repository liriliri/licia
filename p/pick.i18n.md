## CN

过滤对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|源对象|
|filter|string array function|对象过滤器|
|返回值|object|目标对象|

```javascript
pick({a: 1, b: 2}, 'a'); // -> {a: 1}
pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
pick({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```