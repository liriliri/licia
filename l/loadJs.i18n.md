## CN

Inject script tag into page with given src value.

|参数名|类型|说明|
|-----|----|---|
|src |string  |Script source  |
|cb  |function|Onload callback|

```javascript
loadJs('main.js', function (isLoaded)
{
    // Do something...
});
```