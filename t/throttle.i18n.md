## CN

Return a new throttled version of the passed function.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to throttle           |
|wait  |number  |Number of milliseconds to delay|
|返回值|function|New throttled function         |

```javascript
$(window).scroll(throttle(updatePos, 100));
```