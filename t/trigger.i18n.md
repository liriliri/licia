## CN

Trigger browser events.

|参数名|类型|说明|
|-----|----|---|
|[el=document]|element|Element to trigger|
|type         |string |Event type        |
|opts         |object |Options           |

```javascript
trigger(el, 'mouseup');
trigger('keydown', {keyCode: 65});
```