## CN

Opposite of pick.

|参数名|类型|说明|
|-----|----|---|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|返回值|object               |Filtered object|

```javascript
omit({a: 1, b: 2}, 'a'); // -> {b: 2}
omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
omit({a: 1, b: 2, c: 3, d: 4}, function (val, key)
{
    return val % 2;
}); // -> {b: 2, d: 4}