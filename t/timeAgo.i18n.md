## CN

将时间格式化成多久之前的形式。

|参数名|类型|说明|
|-----|----|---|
|date|Date|目标日期|
|[now=new Date]|Date|当时日期|
|返回值|string|格式化时间表示|

```javascript
var now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```