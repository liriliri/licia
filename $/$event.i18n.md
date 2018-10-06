# CN

bind events to certain dom elements.

```javascript
function clickHandler()
{
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```