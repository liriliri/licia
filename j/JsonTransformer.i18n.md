## CN

Json to json transformer.

### constructor

|参数名|类型|说明|
|-----|----|---|
|[data={}]|object|Json object to manipulate|

### set

Set object value.

|参数名|类型|说明|
|-----|----|---|
|[key]|string|Object key  |
|val  |*     |Value to set|

If key is not given, the whole source object is replaced by val.

### get

Get object value.

|参数名|类型|说明|
|-----|----|---|
|[key] |string|Object key                     |
|返回值|*     |Specified value or whole object|

### remove

|参数名|类型|说明|
|-----|----|---|
|key |array string|Object keys to remove|

### map

Shortcut for array map.

|参数名|类型|说明|
|-----|----|---|
|from|string  |From object path              |
|to  |string  |Target object path            |
|fn  |function|Function invoked per iteration|

### filter

Shortcut for array filter.

### compute

Compute value from several object values.

|参数名|类型|说明|
|-----|----|---|
|from|array string|Source values                   |
|to  |string      |Target object path              |
|fn  |function    |Function to compute target value|

```javascript
var data = new JsonTransformer({
    books: [{
        title: 'Book 1',
        price: 5
    }, {
        title: 'Book 2',
        price: 10
    }],
    author: {
        lastname: 'Su',
        firstname: 'RedHood'
    }
});
data.filter('books', function (book) { return book.price > 5 });
data.compute('author', function (author) { return author.firstname + author.lastname });
data.set('count', data.get('books').length);
data.get(); // -> {books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1}
```