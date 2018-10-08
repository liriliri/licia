## CN

Add vendor prefixes to a CSS attribute.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Property name         |
|返回值|string|Prefixed property name|

### dash

Create a dasherize version.

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```