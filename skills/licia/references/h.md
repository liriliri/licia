## h

Create html with JavaScript.

<details>
<summary>Type Definition</summary>

```typescript
function h(
    tag: string,
    attrs?: types.PlainObj<any>,
    ...child: Array<string | HTMLElement>
): HTMLElement;
```

</details>

|Name    |Desc           |
|--------|---------------|
|tag     |Tag name       |
|attrs   |Attributes     |
|...child|Children       |
|return  |Created element|

```javascript
const el = h(
    'div#test.title',
    {
        onclick: function() {},
        title: 'test'
    },
    'inner text'
);
document.body.appendChild(el);
```
