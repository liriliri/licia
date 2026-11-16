## Socket

Tiny WebSocket wrapper.

<details>
<summary>Type Definition</summary>

```typescript
class Socket extends Emitter {
    constructor(
        url: string,
        options?: {
            protocols?: string | string[];
            reconnect?: boolean;
        }
    );
    send(message: any): void;
    close(code?: number, reason?: string): void;
    connect(): void;
}
```

</details>

Extend from Emitter.

### constructor

|Name   |Desc           |
|-------|---------------|
|url    |Url to connect |
|options|Connect options|

Available options:

|Name          |Desc                        |
|--------------|----------------------------|
|protocols     |Protocol string             |
|reconnect=true|Try to reconnect if possible|

### send

Send message.

|Name   |Desc           |
|-------|---------------|
|message|Message to send|

### close

Close WebSocket.

|Name  |Desc             |
|------|-----------------|
|code  |Status code      |
|reason|Reason of closing|

### connect

Connect WebSocket, called when initialized.

```javascript
const ws = new Socket('ws://localhost:8001');
ws.on('open', e => ws.send('Hello'));
```
