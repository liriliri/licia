## CN

Recursive object extending.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|返回值|object|Destination object|

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