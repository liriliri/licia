## css

Css parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
const css: {
    parse(css: string): object;
    stringify(stylesheet: object, options?: { indent?: string }): string;
};
```

</details>

Comments will be stripped.

### parse

Parse css into js object.

|Name  |Desc            |
|------|----------------|
|css   |Css string      |
|return|Parsed js object|

### stringify

Stringify object into css.

|Name      |Desc               |
|----------|-------------------|
|stylesheet|Object to stringify|
|options   |Stringify options  |
|return    |Css string         |

Options:

|Name       |Desc                 |
|-----------|---------------------|
|indent='  '|String used to indent|

```javascript
const stylesheet = css.parse('.name { background: #000; color: red; }');
// {type: 'stylesheet', rules: [{type: 'rule', selector: '.name', declarations: [...]}]}
css.stringify(stylesheet);
```
