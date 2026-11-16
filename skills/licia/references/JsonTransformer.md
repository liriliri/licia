## JsonTransformer

Json to json transformer.

<details>
<summary>Type Definition</summary>

```typescript
class JsonTransformer {
    constructor(data: any);
    set(key: string, val: any): JsonTransformer;
    get(key?: string): any;
    map(from: string, to: string, fn: types.AnyFn): JsonTransformer;
    map(from: string, fn: types.AnyFn): JsonTransformer;
    filter(from: string, to: string, fn: types.AnyFn): JsonTransformer;
    filter(from: string, fn: types.AnyFn): JsonTransformer;
    remove(keys: string | string[]): JsonTransformer;
    compute(
        from: string | string[],
        to: string,
        fn: types.AnyFn
    ): JsonTransformer;
    compute(from: string, fn: types.AnyFn): JsonTransformer;
    toString(): string;
}
```

</details>

### constructor

|Name   |Desc                     |
|-------|-------------------------|
|data={}|Json object to manipulate|

### set

Set object value.

|Name|Desc        |
|----|------------|
|key |Object key  |
|val |Value to set|

If key is not given, the whole source object is replaced by val.

### get

Get object value.

|Name  |Desc                           |
|------|-------------------------------|
|key   |Object key                     |
|return|Specified value or whole object|

### remove

Remove object value.

|Name|Desc                 |
|----|---------------------|
|key |Object keys to remove|

### map

Shortcut for array map.

|Name|Desc                          |
|----|------------------------------|
|from|From object path              |
|to  |Target object path            |
|fn  |Function invoked per iteration|

### filter

Shortcut for array filter.

### compute

Compute value from several object values.

|Name|Desc                            |
|----|--------------------------------|
|from|Source values                   |
|to  |Target object path              |
|fn  |Function to compute target value|

```javascript
const data = new JsonTransformer({
    books: [
        {
            title: 'Book 1',
            price: 5
        },
        {
            title: 'Book 2',
            price: 10
        }
    ],
    author: {
        lastname: 'Su',
        firstname: 'RedHood'
    }
});
data.filter('books', function(book) {
    return book.price > 5;
});
data.compute('author', function(author) {
    return author.firstname + author.lastname;
});
data.set('count', data.get('books').length);
data.get(); // -> {books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1}
```
