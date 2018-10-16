## CN

MutationObserver 安全版本，如果不支持，则什么也不做。

```javascript
var observer = new MutationObserver(function (mutations) {
    // Do something.
});
observer.observe(document.htmlElement);
observer.disconnect();
```