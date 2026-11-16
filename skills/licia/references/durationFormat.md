## durationFormat

Simple duration format function.

<details>
<summary>Type Definition</summary>

```typescript
function durationFormat(duration: number, mask?: string): string;
```

</details>

|Name           |Desc                           |
|---------------|-------------------------------|
|duration       |Duration to format, millisecond|
|mask='hh:mm:ss'|Format mask                    |
|return         |Formatted duration             |

|Mask|Desc        |
|----|------------|
|d   |Days        |
|h   |Hours       |
|m   |Minutes     |
|s   |Seconds     |
|l   |Milliseconds|

```javascript
durationFormat(12345678); // -> '03:25:45'
durationFormat(12345678, 'h:m:s:l'); // -> '3:25:45:678'
```
