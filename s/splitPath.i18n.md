## CN

Split path into device, dir, name and ext.

|参数名|类型|说明|
|-----|----|---|
|path  |string|Path to split                      |
|返回值|object|Object containing dir, name and ext|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```