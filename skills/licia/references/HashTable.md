## HashTable

Hash table implementation.

<details>
<summary>Type Definition</summary>

```typescript
class HashTable {
    constructor(size?: number);
    set(key: string, val: any): void;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): void;
}
```

</details>

### constructor

|Name   |Desc       |
|-------|-----------|
|size=32|Bucket size|

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Value key   |
|val |Value to set|

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Value key         |
|return|Value of given key|

### has

Check if has value.

|Name  |Desc                |
|------|--------------------|
|key   |Value key           |
|return|True if value exists|

### delete

Delete value.

```javascript
const hashTable = new HashTable(128);
hashTable.set('name', 'redhoodsu');
hashTable.get('name'); // -> 'redhoodsu'
hashTable.has('name'); // -> true
hashTable.delete('name');
hashTable.has('name'); // -> false
```
