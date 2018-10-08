## CN

Shortcut for Object.defineProperty(defineProperties).

|参数名|类型|说明|
|-----|----|---|
|obj       |object|Object to define   |
|prop      |string|Property path      |
|descriptor|object|Property descriptor|
|返回值    |object|Object itself      |

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to define    |
|prop  |object|Property descriptors|
|返回值|object|Object itself       |

```javascript
var obj = {b: {c: 3}, d: 4, e: 5};
defineProp(obj, 'a', {
    get: function ()
    {
        return this.e * 2;
    }
});
console.log(obj.a); // -> 10
defineProp(obj, 'b.c', {
    set: (function (val)
    {
        // this is pointed to obj.b
        this.e = val;
    }).bind(obj)
});
obj.b.c = 2;
console.log(obj.a); // -> 4;

obj = {a: 1, b: 2, c: 3};
defineProp(obj, {
    a: {
        get: function ()
        {
            return this.c;
        }
    },
    b: {
        set: function (val)
        {
            this.c = val / 2;
        }
    }
});
console.log(obj.a); // -> 3
obj.b = 4;
console.log(obj.a); // -> 2
```