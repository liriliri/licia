## clamp

Clamp number within the inclusive lower and upper bounds.

<details>
<summary>Type Definition</summary>

```typescript
function clamp(n: number, lower: number, upper: number): number;
function clamp(n: number, upper: number): number;
```

</details>

|Name  |Desc           |
|------|---------------|
|n     |Number to clamp|
|lower |Lower bound    |
|upper |Upper bound    |
|return|Clamped number |

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```
