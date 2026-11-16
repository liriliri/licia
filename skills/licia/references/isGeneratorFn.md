## isGeneratorFn

Check if value is a generator function.

<details>
<summary>Type Definition</summary>

```typescript
function isGeneratorFn(val: any): boolean;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a generator function|

```javascript
isGeneratorFn(function*() {}); // -> true
isGeneratorFn(function() {}); // -> false
```
