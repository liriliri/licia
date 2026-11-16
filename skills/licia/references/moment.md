## moment

Tiny moment.js like implementation.

<details>
<summary>Type Definition</summary>

```typescript
namespace moment {
    class M {
        constructor(value: string | Date);
        format(mask: string): string;
        isValid(): boolean;
        isLeapYear(): boolean;
        isSame(that: M): boolean;
        valueOf(): number;
        isBefore(that: M): boolean;
        isAfter(that: M): boolean;
        year(): number;
        year(number): M;
        month(): number;
        month(number): M;
        date(): number;
        date(number): M;
        hour(): number;
        hour(number): M;
        minute(): number;
        minute(number): M;
        second(): number;
        second(number): M;
        millisecond(): number;
        millisecond(number): M;
        unix(): number;
        clone(): M;
        toDate(): Date;
        toArray(): number[];
        toJSON(): string;
        toISOString(): string;
        toObject(): any;
        toString(): string;
        set(unit: string, num: number): M;
        startOf(unit: string): M;
        endOf(unit: string): M;
        daysInMonth(): number;
        add(num: number, unit: string): M;
        subtract(num: number, unit: string): M;
        diff(input: M | string | Date, unit: string, asFloat: boolean): number;
    }
}
function moment(value: string | Date): moment.M;
```

</details>

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
