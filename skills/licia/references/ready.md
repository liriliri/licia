## ready

Invoke callback when dom is ready, similar to jQuery ready.

<details>
<summary>Type Definition</summary>

```typescript
function ready(fn: types.AnyFn): void;
```

</details>

|Name|Desc             |
|----|-----------------|
|fn  |Callback function|

```javascript
ready(function() {
    // It's safe to manipulate dom here.
});
```
