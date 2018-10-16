## CN

递归地创建文件夹。

|参数名|类型|说明|
|-----|----|---|
|dir|string|文件夹路径|
|mode=0777|number|文件夹模式|
|[callback]|function|回调|

```javascript
mkdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log(err);
    else console.log('Done');
});
```