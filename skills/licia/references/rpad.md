## rpad

Pad string on the right side if it's shorter than length.

<details>
<summary>Type Definition</summary>

```typescript
function rpad(str: string, len: number, chars?: string): string;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|str   |String to pad         |
|len   |Padding length        |
|chars |String used as padding|
|return|Result string         |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```
