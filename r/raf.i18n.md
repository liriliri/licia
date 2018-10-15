## CN

Shortcut for requestAnimationFrame.

Use setTimeout if native requestAnimationFrame is not supported.

```javascript
var id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```