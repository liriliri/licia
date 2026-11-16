## centerAlign

Center align text in a string.

<details>
<summary>Type Definition</summary>

```typescript
function centerAlign(
    str: string | string[],
    width?: number
): string;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|str   |String to align         |
|width |Total width of each line|
|return|Center aligned string   |

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```
