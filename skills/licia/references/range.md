## range

Create flexibly-numbered lists of integers.

<details>
<summary>Type Definition</summary>

```typescript
function range(
    start: number,
    end?: number,
    step?: number
): number[];
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|start |Start of the range                |
|end   |End of the range                  |
|step=1|Value to increment or decrement by|
|return|List of integers                  |

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2); // -> [0, 2, 4]
```
