## CN

Return a new debounced version of the passed function.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to debounce           |
|wait  |number  |Number of milliseconds to delay|
|返回值|function|New debounced function         |

```javascript
$(window).resize(debounce(calLayout, 300));
```