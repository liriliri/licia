## defined

Return the first argument that is not undefined.

<details>
<summary>Type Definition</summary>

```typescript
function defined(...args: any[]): any;
```

</details>

|Name   |Desc                  |
|-------|----------------------|
|...args|Arguments to check    |
|return |First defined argument|

```javascript
defined(false, 2, void 0, 100); // -> false
```
