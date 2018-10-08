## CN

Tiny moment.js like implementation.

It only supports a subset of moment.js api.

### Available methods

format, isValid, isLeapYear, isSame, isBefore, isAfter, year,
month, date, hour, minute, second, millisecond, unix, clone,
toDate, toArray, toJSON, toISOString, toObject, toString, set,
startOf, endOf, add, subtract, diff

### Not supported

locale and units like quarter and week.

Note: Format uses dateFormat module, so the mask is not quite the same as moment.js.

```javascript
moment('20180501').format('yyyy-mm-dd'); // -> '2018-05-01'
```