## CN

类似 extend，但会递归进行扩展。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|...src|object|源对象|
|返回值|object|目标对象|

```javascript
extendDeep({
    name: 'RedHood',
    family: {
        mother: 'Jane',
        father: 'Jack'
    }
}, {
    family: {
        brother: 'Bruce'
    }
});
// -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
```