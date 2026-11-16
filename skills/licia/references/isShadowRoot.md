## isShadowRoot

Check if value is a ShadowRoot object.

<details>
<summary>Type Definition</summary>

```typescript
function isShadowRoot(val: any): val is ShadowRoot;
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|val   |Value to check               |
|return|True if value is a ShadowRoot|

```javascript
isShadowRoot(document.body); // -> false
```
