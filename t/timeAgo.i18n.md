## CN

Format datetime with *** time ago statement.

|参数名|类型|说明|
|-----|----|---|
|date          |Date  |Date to calculate        |
|[now=new Date]|Date  |Current date             |
|返回值        |string|Formatted time ago string|

```javascript
var now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```