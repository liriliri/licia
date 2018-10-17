## CN

清除源码中的注释。

|参数名|类型|说明|
|-----|----|---|
|str|string|源码|
|返回值|string|无注释代码|

```javascript
stripCmts('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```