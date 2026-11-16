## isClose

Check if values are close(almost equal) to each other.

<details>
<summary>Type Definition</summary>

```typescript
function isClose(
    a: number,
    b: number,
    relTol?: number,
    absTol?: number
): boolean;
```

</details>

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|Name       |Desc                    |
|-----------|------------------------|
|a          |Number to compare       |
|b          |Number to compare       |
|relTol=1e-9|Relative tolerance      |
|absTol=0   |Absolute tolerance      |
|return     |True if values are close|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```
