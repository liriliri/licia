## isStrBlank

Check if string is blank.

<details>
<summary>Type Definition</summary>

```typescript
function isStrBlank(str: string): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|str   |String to check        |
|return|True if string is blank|

```javascript
isStrBlank('licia'); // -> false
isStrBlank(''); // -> true
isStrBlank('    '); // -> true
isStrBlank('\r\n '); // -> true
```
