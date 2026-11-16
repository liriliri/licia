## selector

Css selector parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
namespace selector {
    interface IToken {
        type: string;
        value: string;
    }
}
const selector: {
    parse(selector: string): Array<selector.IToken[]>;
    stringify(selector: Array<selector.IToken[]>): string;
};
```

</details>

### parse

Parse css selector into js object.

|Name    |Desc            |
|--------|----------------|
|selector|Css selector    |
|return  |Parsed js object|

### stringify

Stringify object into an css selector.

|Name  |Desc               |
|------|-------------------|
|groups|Object to stringify|
|return|Css selector       |

```javascript
const groups = selector.parse('#test, input.user[name="licia"]');
// -> [[{type: 'id', value: 'test'}],[{type: 'tag', value: 'input'}...]]
selector.stringify(groups);
```
