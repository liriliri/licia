## Channel

Interconnectable Message channel.

<details>
<summary>Type Definition</summary>

```typescript
class Channel extends Emitter {
    send(msg: any): void;
    connect(channel: Channel): void;
    disconnect(channel: Channel): void;
    isConnected(channel: Channel): boolean;
    destroy(): void;
}
```

</details>

### send

Send a message to all connected channels.

|Name|Desc           |
|----|---------------|
|msg |Message to send|

### connect

Connect to another channel.

|Name   |Desc              |
|-------|------------------|
|channel|Channel to connect|

### disconnect

Disconnect from another channel.

|Name   |Desc                 |
|-------|---------------------|
|channel|Channel to disconnect|

### isConnected

Check if a channel is connected to another channel.

|Name   |Desc                  |
|-------|----------------------|
|channel|Channel to check      |
|return |Whether it's connected|

### destroy

Destroy the channel, disconnect from all connected channels.

```javascript
const channelA = new Channel();
const channelB = new Channel();
channelA.connect(channelB);
channelB.on('message', msg => {
    console.log(msg); // -> 'hello'
});
channelA.send('hello');
channelA.on('message', msg => {
    console.log(msg); // -> 'world'
});
channelB.send('world');
channelA.isConnected(channelB); // -> true
channelB.isConnected(channelA); // -> true
```
