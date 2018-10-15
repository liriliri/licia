## CN

Recursively remove directories.

|参数名|类型|说明|
|-----|----|---|
|dir     |string  |Directory to remove|
|callback|function|Callback           |

```javascript
rmdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log (err);
    else console.log('Done');
});
```