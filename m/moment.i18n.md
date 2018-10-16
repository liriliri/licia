## CN

简单的类 moment.js 实现。

它只支持一小部分的 moment.js api。

### 可用方法 

format，isValid，isLeapYear，isSame，isBefore，isAfter，year，
month，date，hour，minute，second，millisecond，unix，clone，
toDate，toArray，toJSON，toISOString，toObject，toString，set，
startOf，endOf，add，subtract，diff

### 不支持特性

时区以及 quarter 和 week 单位。

注意：格式化功能使用 dateFormat 模块，所以掩码格式并不完全与 moment.js 一致。

```javascript
moment('20180501').format('yyyy-mm-dd'); // -> '2018-05-01'
```