## copy

Copy text to clipboard using document.execCommand.

<details>
<summary>Type Definition</summary>

```typescript
function copy(text: string, cb?: types.AnyFn): void;
```

</details>

|Name|Desc             |
|----|-----------------|
|text|Text to copy     |
|cb  |Optional callback|

```javascript
copy('text', function(err) {
    // Handle errors.
});
```
