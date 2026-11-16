## loadJs

Inject script tag into page with given src value.

<details>
<summary>Type Definition</summary>

```typescript
function loadJs(src: string, cb?: types.AnyFn): void;
```

</details>

|Name|Desc           |
|----|---------------|
|src |Script source  |
|cb  |Onload callback|

```javascript
loadJs('main.js', function(isLoaded) {
    // Do something...
});
```
