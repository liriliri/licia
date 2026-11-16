## query

Parse and stringify url query strings.

<details>
<summary>Type Definition</summary>

```typescript
const query: {
    parse(str: string): Record<string, string | string[]>;
    stringify(object: any): string;
};
```

</details>

### parse

Parse a query string into an object.

|Name  |Desc        |
|------|------------|
|str   |Query string|
|return|Query object|

### stringify

Stringify an object into a query string.

|Name  |Desc        |
|------|------------|
|obj   |Query object|
|return|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({ foo: 'bar', eruda: 'true' }); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```
