## CN

Return a filtered copy of an object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|返回值|object               |Filtered object|

```javascript
pick({a: 1, b: 2}, 'a'); // -> {a: 1}
pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
pick({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```