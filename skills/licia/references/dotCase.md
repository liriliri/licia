## dotCase

Convert string to "dotCase".

<details>
<summary>Type Definition</summary>

```typescript
function dotCase(str: string): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Dot cased string |

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```
