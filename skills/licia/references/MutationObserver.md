## MutationObserver

Safe MutationObserver, does nothing if MutationObserver is not supported.

```javascript
const observer = new MutationObserver(function(mutations) {
    // Do something.
});
observer.observe(document.documentElement);
observer.disconnect();
```
