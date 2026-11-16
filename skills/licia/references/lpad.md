## lpad

Pad string on the left side if it's shorter than length.

<details>
<summary>Type Definition</summary>

```typescript
function lpad(str: string, len: number, chars?: string): string;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|str   |String to pad         |
|len   |Padding length        |
|chars |String used as padding|
|return|Result string         |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```
