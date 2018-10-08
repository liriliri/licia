## CN

Strip comments from source code.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Source code          |
|返回值|string|Code without comments|

```javascript
stripCmts('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```