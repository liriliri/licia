## strWidth

Get string's visual width.

<details>
<summary>Type Definition</summary>

```typescript
function strWidth(str: string): number;
```

</details>

|Name  |Desc               |
|------|-------------------|
|str   |String to get width|
|return|Visual width       |

```javascript
strWidth('Hello \nworld!'); // -> 12
strWidth('\u001b[4m你好，世界！\u001b[0m'); // -> 12
```
