## toEl

Convert html string to dom elements.

<details>
<summary>Type Definition</summary>

```typescript
function toEl(str: string): Element;
```

</details>

There should be only one root element.

|Name  |Desc        |
|------|------------|
|str   |Html string |
|return|Html element|

```javascript
toEl('<div>test</div>');
```
