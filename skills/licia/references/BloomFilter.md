## BloomFilter

Bloom filter implementation.

<details>
<summary>Type Definition</summary>

```typescript
class BloomFilter {
    constructor(size?: number, k?: number);
    add(val: string): void;
    test(val: string): boolean;
}
```

</details>

### constructor

|Name     |Desc                    |
|---------|------------------------|
|size=1024|Number of buckets       |
|k=3      |Number of Hash functions|

### add

Add an element to the filter.

|Name|Desc        |
|----|------------|
|val |Value to add|

### test

Test if an element is in the filter.

|Name  |Desc                                     |
|------|-----------------------------------------|
|val   |Value to test                            |
|return|True if probably, false if definitely not|

```javascript
const bloom = new BloomFilter(256, 3);
bloom.add('Bruce Wayne');
bloom.add('Clark Kent');
bloom.test('Clark Kent'); // -> true
bloom.test('Bruce Wayne'); // -> true
bloom.test('Tony Stark'); // -> false
```
