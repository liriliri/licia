## Store

Memory storage.

<details>
<summary>Type Definition</summary>

```typescript
class Store extends Emitter {
    constructor(data?: Record<string, any>);
    set<T>(key: string, val: T): void;
    set(values: Record<string, any>): void;
    get<T = any>(key: string): T;
    get(keys: string[]): Record<string, any>;
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (val: any, key: string) => void): void;
}
```

</details>

Extend from Emitter.

### constructor

|Name|Desc        |
|----|------------|
|data|Initial data|

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Value key   |
|val |Value to set|

Set values.

|Name  |Desc           |
|------|---------------|
|values|Key value pairs|

This emit a change event whenever is called.

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Value key         |
|return|Value of given key|

Get values.

|Name  |Desc           |
|------|---------------|
|keys  |Array of keys  |
|return|Key value pairs|

### remove

Remove value.

|Name|Desc         |
|----|-------------|
|key |Key to remove|

### clear

Clear all data.

### each

Iterate over values.

|Name|Desc                          |
|----|------------------------------|
|fn  |Function invoked per iteration|

```javascript
const store = new Store();
store.set('user', { name: 'licia' });
store.get('user').name; // -> 'licia'
store.clear();
store.each(function(val, key) {
    // Do something.
});
store.on('change', function(key, newVal, oldVal) {
    // It triggers whenever set is called.
});
```
