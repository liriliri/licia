## CN

Event delegation.

### add

Add event delegation.

|参数名|类型|说明|
|-----|----|---|
|el      |element |Parent element|
|type    |string  |Event type    |
|selector|string  |Match selector|
|cb      |function|Event callback|

### remove

Remove event delegation.

```javascript
var container = document.getElementById('container');
function clickHandler()
{
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```