## stripNum

Strip number to a specified precision.

<details>
<summary>Type Definition</summary>

```typescript
function stripNum(num: number, precision?: number): number;
```

</details>

|Name        |Desc           |
|------------|---------------|
|num         |Number to strip|
|precision=12|Precision      |
|return      |Result number  |

```javascript
stripNum(0.1 + 0.2); // -> 0.3
```
