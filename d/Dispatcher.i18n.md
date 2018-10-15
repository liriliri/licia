## CN

Flux 调度器。

[相关文档](https://facebook.github.io/flux/docs/dispatcher.html)。

```javascript
var dispatcher = new Dispatcher();

dispatcher.register(function (payload) {
   switch (payload.actionType) {
       // Do something
   }
});

dispatcher.dispatch({
    actionType: 'action'
});
```