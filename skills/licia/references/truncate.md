## truncate

Truncate a string to a specific width.

<details>
<summary>Type Definition</summary>

```typescript
function truncate(
    txt: string,
    width: number,
    options?: {
        ellipsis?: string;
        separator: string;
    }
): string;
```

</details>

|Name   |Desc                 |
|-------|---------------------|
|txt    |Text to truncate     |
|width  |Maximum string length|
|options|Options object       |
|return |Truncated string     |

Options:

|Name          |Desc                              |
|--------------|----------------------------------|
|ellipsis='...'|String to indicate text is omitted|
|separator     |Separator pattern to truncate to  |

```javascript
truncate('ORA ORA ORA ORA ORA ORA', 12); // -> 'ORA ORA O...'
truncate('ORA ORA ORA ORA ORA ORA', 10, {
    separator: ' ',
    ellipsis: '……'
}); // -> 'ORA ORA……'
```
