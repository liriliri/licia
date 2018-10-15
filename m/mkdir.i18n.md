## CN

Recursively create directories.

|参数名|类型|说明|
|-----|----|---|
|dir        |string  |Directory to create|
|mode=0777|number  |Directory mode     |
|[callback] |function|Callback           |

```javascript
mkdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log(err);
    else console.log('Done');
});
```