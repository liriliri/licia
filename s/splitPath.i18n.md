## CN

将路径拆分为文件夹路径，文件名和扩展名。

|参数名|类型|说明|
|-----|----|---|
|path|string|目标路径|
|返回值|object|包含文件夹路径，文件名和扩展名的对象|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```