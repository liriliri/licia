## Delegator

Object delegation.

<details>
<summary>Type Definition</summary>

```typescript
class Delegator {
    constructor(host: object, target: object | string);
    method(name: string, target?: string): Delegator;
    getter(name: string, target?: string): Delegator;
    setter(name: string, target?: string): Delegator;
    access(name: string, target?: string): Delegator;
}
```

</details>

### constructor

|Name  |Desc             |
|------|-----------------|
|host  |Host object      |
|target|Delegation target|

### method

Allow method to be accessed on the host object.

|Name       |Desc              |
|-----------|------------------|
|name       |Host method name  |
|target=name|Target method name|

### getter

Create a getter.

### setter

Create a setter.

### access

Create a accessor, same as calling both setter and getter.

```javascript
const host = {
    target: {
        a() {
            return 'a';
        },
        b: 'b',
        c: 'c',
        d: 'd',
        e() {
            return 'e';
        }
    }
};
const delegator = new Delegator(host, 'target');
delegator
    .method('a')
    .getter('b')
    .setter('c')
    .access('d');
host.a(); // -> 'a'
host.b; // -> 'b'
host.c = 5;
host.target.c; // -> 5
host.d; // -> 'd'
host.d = 5;
host.d; // -> 5
```
