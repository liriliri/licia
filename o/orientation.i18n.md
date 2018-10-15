## CN

Screen orientation helper.

### on

Bind change event.

### off

Unbind change event.

### get

Get current orientation(landscape or portrait).

```javascript
orientation.on('change', function (direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```