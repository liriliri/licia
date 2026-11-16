## html

Html parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
const html: {
    parse(html: string): any[];
    stringify(tree: any[]): string;
};
```

</details>

### parse

Parse html string into js object.

|Name  |Desc            |
|------|----------------|
|html  |Html string     |
|return|Parsed js object|

### stringify

Stringify object into an html string.

|Name  |Desc               |
|------|-------------------|
|tree  |Object to stringify|
|return|Html string        |

```javascript
const tree = html.parse('<div id="name">licia</div>');
// -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
html.stringify(tree);
```
