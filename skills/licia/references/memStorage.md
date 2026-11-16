## memStorage

Memory-backed implementation of the Web Storage API.

<details>
<summary>Type Definition</summary>

```typescript
const memStorage: typeof window.localStorage;
```

</details>

A replacement for environments where localStorage or sessionStorage is not available.

```javascript
const localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```
