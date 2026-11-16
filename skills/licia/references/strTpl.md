## strTpl

Simple string template.

<details>
<summary>Type Definition</summary>

```typescript
function strTpl(str: string, data: types.PlainObj<any>): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |Template string|
|data  |Data to pass in|
|return|Result string  |

```javascript
strTpl('Hello, {{name.first}}!', { name: { first: 'licia' } }); // -> 'Hello, licia!'
```
