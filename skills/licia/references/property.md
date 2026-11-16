## property

Return a function that will itself return the key property of any passed-in object.

<details>
<summary>Type Definition</summary>

```typescript
function property(path: string | string[]): types.AnyFn;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|path  |Path of the property to get|
|return|New accessor function      |

```javascript
const obj = { a: { b: 1 } };
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```
