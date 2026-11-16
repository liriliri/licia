## Caseless

Modify object props without caring about letter case.

<details>
<summary>Type Definition</summary>

```typescript
class Caseless {
    constructor(obj: any);
    getKey(key: string): string | void;
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    has(key: string): boolean;
}
```

</details>

### constructor

|Name|Desc         |
|----|-------------|
|obj |Target object|

### getKey

Get key with preserved casing.

|Name  |Desc        |
|------|------------|
|key   |Caseless key|
|return|Object key  |

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Caseless key|
|val |Value to set|

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Caseless key      |
|return|Value of given key|

### remove

Remove value.

|Name|Desc        |
|----|------------|
|key |Caseless key|

### has

Determine whether target object has given key.

|Name  |Desc                 |
|------|---------------------|
|key   |Caseless key         |
|return|True if has given key|

```javascript
const headers = { 'Content-Type': 'text/javascript' };
const c = new Caseless(headers);
c.set('content-type', 'text/css');
console.log(headers); // -> { 'Content-Type': 'text/css' }
c.getKey('content-type'); // -> 'Content-Type'
c.remove('content-type');
c.has('content-type'); // -> false
```
