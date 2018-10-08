## CN

Normalize file path slashes.

|参数名|类型|说明|
|-----|----|---|
|path  |string|Path to normalize|
|返回值|string|Normalized path  |

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```