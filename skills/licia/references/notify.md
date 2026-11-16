## notify

Wrapper for the Web Notifications API.

<details>
<summary>Type Definition</summary>

```typescript
namespace notify {
    class Notification extends Emitter {
        constructor(title: string, options?: object);
        show(): void;
    }
}
function notify(title: string, options?: object): void;
```

</details>

|Name   |Desc                |
|-------|--------------------|
|title  |Notification title  |
|options|Notification options|

You can pass exactly the same options supported in the [Web Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification).

### Notification

Use this to create instance when certain events like close, show, click or error needed to be handled.

```javascript
notify('licia', {
    body: 'This is the notification content'
});
const notification = new notify.Notification('licia', {
    body: 'This is the notification content'
});
notification.on('error', err => console.log(err));
notification.on('click', e => console.log(e));
notification.show();
```
