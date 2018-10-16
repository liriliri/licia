## CN

Web Storage 接口的纯内存实现。

当 localStorage 或者 sessionStorage 无法使用时可以使用其作为替代。

```javascript
var localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```