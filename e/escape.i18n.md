## CN

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escape('You & Me'); -> // -> 'You &amp; Me'
```