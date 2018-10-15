## CN

Memory storage.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|data|object|Initial data|

### set

Set value.

|参数名|类型|说明|
|-----|----|---|
|key |string|Value key   |
|val |*     |Value to set|

Set values.

|参数名|类型|说明|
|-----|----|---|
|vals|object|Key value pairs|

This emit a change event whenever is called.

### get

Get value.

|参数名|类型|说明|
|-----|----|---|
|key   |string|Value key         |
|返回值|*     |Value of given key|

Get values.

|参数名|类型|说明|
|-----|----|---|
|keys  |array |Array of keys  |
|返回值|object|Key value pairs|

### remove

Remove value.

|参数名|类型|说明|
|-----|----|---|
|key |string array|Key to remove|

### clear

Clear all data.

### each

Iterate over values.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function invoked per interation|

```javascript
var store = new Store('test');
store.set('user', {name: 'licia'});
store.get('user').name; // -> 'licia'
store.clear();
store.each(function (val, key) {
    // Do something.
});
store.on('change', function (key, newVal, oldVal) {
    // It triggers whenever set is called.
});
```