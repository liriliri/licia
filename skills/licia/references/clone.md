## clone

Create a shallow-copied clone of the provided plain object.

<details>
<summary>Type Definition</summary>

```typescript
function clone<T>(val: T): T;
```

</details>

Any nested objects or arrays will be copied by reference, not duplicated.

|Name  |Desc          |
|------|--------------|
|val   |Value to clone|
|return|Cloned value  |

```javascript
clone({ name: 'eustia' }); // -> {name: 'eustia'}
```
