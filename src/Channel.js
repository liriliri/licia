/* Interconnectable Message channel.
 *
 * ### send
 *
 * Send a message to all connected channels.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |msg |Message to send|
 *
 * ### connect
 *
 * Connect to another channel.
 *
 * |Name   |Desc              |
 * |-------|------------------|
 * |channel|Channel to connect|
 *
 * ### disconnect
 *
 * Disconnect from another channel.
 *
 * |Name   |Desc                 |
 * |-------|---------------------|
 * |channel|Channel to disconnect|
 *
 * ### isConnected
 *
 * Check if a channel is connected to another channel.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |channel|Channel to check      |
 * |return |Whether it's connected|
 *
 * ### destroy
 *
 * Destroy the channel, disconnect from all connected channels.
 */

/* example
 * const channelA = new Channel();
 * const channelB = new Channel();
 * channelA.connect(channelB);
 * channelB.on('message', msg => {
 *     console.log(msg); // -> 'hello'
 * });
 * channelA.send('hello');
 * channelA.on('message', msg => {
 *     console.log(msg); // -> 'world'
 * });
 * channelB.send('world');
 * channelA.isConnected(channelB); // -> true
 * channelB.isConnected(channelA); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare class Channel extends Emitter {
 *     send(msg: any): void;
 *     connect(channel: Channel): void;
 *     disconnect(channel: Channel): void;
 *     isConnected(channel: Channel): boolean;
 *     destroy(): void;
 * }
 */

_('Emitter each remove some');

exports = Emitter.extend({
    initialize: function Channel() {
        this._connections = [];

        this.callSuper(Emitter, 'initialize');
    },
    send(msg) {
        each(this._connections, connection => {
            connection.emit('message', msg, this);
        });
    },
    connect(connection) {
        if (this.isConnected(connection)) {
            return;
        }

        this._connections.push(connection);

        connection.connect(this);
    },
    disconnect(connection) {
        if (!this.isConnected(connection)) {
            return;
        }

        remove(this._connections, item => item === connection);

        connection.disconnect(this);
    },
    isConnected(connection) {
        if (connection === this) {
            throw new Error('Channel cannot be connected to itself.');
        }

        return some(this._connections, item => item === connection);
    },
    destroy() {
        each(this._connections, connection => {
            this.disconnect(connection);
        });
    }
});
