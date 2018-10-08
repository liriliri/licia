## CN

Simple but extremely useful date format function.

|参数名|类型|说明|
|-----|----|---|
|[date=new Date]|Date   |Date object to format|
|mask           |string |Format mask          |
|[utc=false]    |boolean|UTC or not           |
|[gmt=false]    |boolean|GMT or not           |

|Mask|Description                                                      |
|----|-----------------------------------------------------------------|
|d   |Day of the month as digits; no leading zero for single-digit days|
|dd  |Day of the month as digits; leading zero for single-digit days   |
|ddd |Day of the week as a three-letter abbreviation                   |
|dddd|Day of the week as its full name                                 |
|m   |Month as digits; no leading zero for single-digit months         |
|mm  |Month as digits; leading zero for single-digit months            |
|mmm |Month as a three-letter abbreviation                             |
|mmmm|Month as its full name                                           |
|yy  |Year as last two digits; leading zero for years less than 10     |
|yyyy|Year represented by four digits                                  |
|h   |Hours; no leading zero for single-digit hours (12-hour clock)    |
|hh  |Hours; leading zero for single-digit hours (12-hour clock)       |
|H   |Hours; no leading zero for single-digit hours (24-hour clock)    |
|HH  |Hours; leading zero for single-digit hours (24-hour clock)       |
|M   |Minutes; no leading zero for single-digit minutes                |
|MM  |Minutes; leading zero for single-digit minutes                   |
|s   |Seconds; no leading zero for single-digit seconds                |
|ss  |Seconds; leading zero for single-digit seconds                   |
|l L |Milliseconds. l gives 3 digits. L gives 2 digits                 |
|t   |Lowercase, single-character time marker string: a or p           |
|tt  |Lowercase, two-character time marker string: am or pm            |
|T   |Uppercase, single-character time marker string: A or P           |
|TT  |Uppercase, two-character time marker string: AM or PM            |
|Z   |US timezone abbreviation, e.g. EST or MDT                        |
|o   |GMT/UTC timezone offset, e.g. -0500 or +0230                     |
|S   |The date's ordinal suffix (st, nd, rd, or th)                    |
|UTC:|Must be the first four characters of the mask                    |

```javascript
dateFormat('isoDate'); // -> 2016-11-19
dateFormat('yyyy-mm-dd HH:MM:ss'); // -> 2016-11-19 19:00:04
dateFormat(new Date(), 'yyyy-mm-dd'); // -> 2016-11-19
```