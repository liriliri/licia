## nextTick

Next tick for both node and browser.

<details>
<summary>Type Definition</summary>

```typescript
function nextTick(cb: types.AnyFn): void;
```

</details>

|Name|Desc            |
|----|----------------|
|cb  |Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function() {
    // Do something...
});
```
