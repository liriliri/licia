## loadCss

Inject link tag into page with given href value.

<details>
<summary>Type Definition</summary>

```typescript
function loadCss(src: string, cb?: types.AnyFn): void;
```

</details>

|Name|Desc           |
|----|---------------|
|src |Style source   |
|cb  |Onload callback|

```javascript
loadCss('style.css', function(isLoaded) {
    // Do something...
});
```
