## CN

Memory-backed implementation of the Web Storage API.

A replacement for environments where localStorage or sessionStorage is not available.

```javascript
var localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```