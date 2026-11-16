## evalJs

Execute js in given context.

<details>
<summary>Type Definition</summary>

```typescript
function evalJs(js: string, ctx?: any): void;
```

</details>

|Name      |Desc           |
|----------|---------------|
|js        |JavaScript code|
|ctx=global|Context        |

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', { a: 2 }); // -> 2
```
