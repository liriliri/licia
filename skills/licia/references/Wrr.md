## Wrr

Weighted Round Robin implementation.

<details>
<summary>Type Definition</summary>

```typescript
class Wrr {
    size: number;
    set(val: any, weight: number): void;
    get(val: any): number | void;
    remove(val: any): void;
    clear(): void;
    next(): any;
}
```

</details>

### size

Pool size.

### set

Set a value to the pool. Weight is updated if value already exists.

|Name  |Desc               |
|------|-------------------|
|val   |Value to set       |
|weight|Weight of the value|

### get

Get weight of given value.

|Name  |Desc               |
|------|-------------------|
|val   |Value to get       |
|return|Weight of the value|

### remove

Remove given value.

|Name|Desc           |
|----|---------------|
|val |Value to remove|

### next

Get next value from pool.

### clear

Clear all values.

```javascript
const pool = new Wrr();
pool.set('A', 4);
pool.set('B', 8);
pool.set('C', 2);
pool.next();
pool.remove('A');
console.log(pool.size); // -> 2
```
