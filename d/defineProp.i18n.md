## CN

Object.defineProperty(defineProperties) 的快捷方式。

|参数名|类型|说明|
|-----|----|---|
|obj|object|要定义的对象|
|prop|string|属性路径|
|descriptor|object|属性描述|
|返回值|object|传入对象|

|参数名|类型|说明|
|-----|----|---|
|obj|object|要定义的对象|
|prop|object|属性描述|
|返回值|object|传入对象|

```javascript
var obj = {b: {c: 3}, d: 4, e: 5};
defineProp(obj, 'a', {
    get: function () {
        return this.e * 2;
    }
});
console.log(obj.a); // -> 10
defineProp(obj, 'b.c', {
    set: (function (val) {
        // this is pointed to obj.b
        this.e = val;
    }).bind(obj)
});
obj.b.c = 2;
console.log(obj.a); // -> 4;

obj = {a: 1, b: 2, c: 3};
defineProp(obj, {
    a: {
        get: function () {
            return this.c;
        }
    },
    b: {
        set: function (val) {
            this.c = val / 2;
        }
    }
});
console.log(obj.a); // -> 3
obj.b = 4;
console.log(obj.a); // -> 2
```