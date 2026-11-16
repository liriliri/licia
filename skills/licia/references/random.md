## random

Produces a random number between min and max(inclusive).

<details>
<summary>Type Definition</summary>

```typescript
function random(
    min: number,
    max?: number,
    floating?: boolean
): number;
```

</details>

|Name          |Desc                  |
|--------------|----------------------|
|min           |Minimum possible value|
|max           |Maximum possible value|
|floating=false|Float or not          |
|return        |Random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```
