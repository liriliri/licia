## CN

随机字节序列生成器。

如果支持，使用 node 的 crypto 模块或浏览器的 crypto 对象。

|参数名|类型|说明|
|-----|----|---|
|size  |number|Number of bytes to generate |
|返回值|object|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```