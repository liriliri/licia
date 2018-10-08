## CN

Create an object composed of the inverted keys and values of object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to invert   |
|返回值|object|New inverted object|

If object contains duplicate values, subsequent values overwrite property
assignments of previous values unless multiValue is true.

```javascript
invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
```