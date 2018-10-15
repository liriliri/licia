## CN

Safe MutationObserver, does nothing if MutationObserver is not supported.

```javascript
var observer = new MutationObserver(function (mutations) {
    // Do something.
});
observer.observe(document.htmlElement);
observer.disconnect();
```