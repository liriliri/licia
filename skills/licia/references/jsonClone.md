## jsonClone

Use JSON parse and stringify to clone object.

<details>
<summary>Type Definition</summary>

```typescript
function jsonClone<T>(val: T): T;
```

</details>

|Name  |Desc          |
|------|--------------|
|val   |Value to clone|
|return|Cloned value  |

```javascript
jsonClone({ name: 'licia' }); // -> { name: 'licia' }
```
