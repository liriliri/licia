## defineProp

Shortcut for Object.defineProperty(defineProperties).

<details>
<summary>Type Definition</summary>

```typescript
function defineProp<T>(
    obj: T,
    prop: string,
    descriptor: PropertyDescriptor
): T;
function defineProp<T>(
    obj: T,
    descriptor: PropertyDescriptorMap
): T;
```

</details>

|Name      |Desc               |
|----------|-------------------|
|obj       |Object to define   |
|prop      |Property path      |
|descriptor|Property descriptor|
|return    |Object itself      |

|Name  |Desc                |
|------|--------------------|
|obj   |Object to define    |
|prop  |Property descriptors|
|return|Object itself       |

```javascript
const obj = { b: { c: 3 }, d: 4, e: 5 };
defineProp(obj, 'a', {
    get: function() {
        return this.e * 2;
    }
});
// obj.a is equal to 10
defineProp(obj, 'b.c', {
    set: function(val) {
        // this is pointed to obj.b
        this.e = val;
    }.bind(obj)
});
obj.b.c = 2;
// obj.a is equal to 4

const obj2 = { a: 1, b: 2, c: 3 };
defineProp(obj2, {
    a: {
        get: function() {
            return this.c;
        }
    },
    b: {
        set: function(val) {
            this.c = val / 2;
        }
    }
});
// obj2.a is equal to 3
obj2.b = 4;
// obj2.a is equal to 2
```
