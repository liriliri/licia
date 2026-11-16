## timeAgo

Format datetime with *** time ago statement.

<details>
<summary>Type Definition</summary>

```typescript
namespace timeAgo {
    interface ITimeAgo {
        (date: Date | number, now?: Date | number): string;
        i18n: string[][];
    }
}
const timeAgo: timeAgo.ITimeAgo;
```

</details>

|Name        |Desc                     |
|------------|-------------------------|
|date        |Date to calculate        |
|now=new Date|Current date             |
|return      |Formatted time ago string|

```javascript
const now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> just now
timeAgo(now - 1000 * 15); // -> 15 seconds ago
timeAgo(now + 1000 * 60 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
// Replace i18n to support other languages.
timeAgo.i18n = [
    ['刚刚', '马上'],
    ['%s 秒前', '%s 秒后'],
    ['1 分钟前', '1 分钟后'],
    ['%s 分钟前', '%s 分钟后'],
    ['1 小时前', '1 小时后'],
    ['%s 小时前', '%s 小时后'],
    ['1 天前', '1 天后'],
    ['%s 天前', '%s 天后'],
    ['1 周前', '1 周后'],
    ['%s 周前', '%s 周后'],
    ['1 个月前', '1 个月后'],
    ['%s 个月前', '%s 个月后'],
    ['1 年前', '1 年后'],
    ['%s 年前', '%s 年后']
];
timeAgo(now - 1000 * 15); // -> 15 秒前
```
