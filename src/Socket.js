/* Tiny WebSocket wrapper.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |url    |Url to connect |
 * |options|Connect options|
 *
 * Available options:
 *
 * |Name          |Desc                        |
 * |--------------|----------------------------|
 * |protocols     |Protocol string             |
 * |reconnect=true|Try to reconnect if possible|
 *
 * ### send
 *
 * Send message.
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |message|Message to send|
 *
 * ### close
 *
 * Close WebSocket.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |code  |Status code      |
 * |reason|Reason of closing|
 *
 * ### connect
 *
 * Connect WebSocket, called when initialized.
 */

/* example
 * const ws = new Socket('ws://localhost:8001');
 * ws.on('open', e => ws.send('Hello'));
 */

/* module
 * env: browser
 * since: 1.22.0
 * test: manual
 */

/* typescript
 * export declare class Socket extends Emitter {
 *     constructor(
 *         url: string,
 *         options?: {
 *             protocols?: string | string[];
 *             reconnect?: boolean;
 *         }
 *     );
 *     send(message: any): void;
 *     close(code?: number, reason?: string): void;
 *     connect(): void;
 * }
 */

_('defaults Emitter types');

exports = Emitter.extend({
    initialize: function Socket(url, options = {}) {
        this.callSuper(Emitter, 'initialize');

        defaults(options, defOpts);
        this._options = options;
        this._url = url;

        this.connect();
    },
    send(message) {
        this._ws.send(message);
    },
    close(code, reason) {
        this._ws.close(code || 1e3, reason);
    },
    connect() {
        const options = this._options;

        const ws = new WebSocket(this._url, options.protocols);

        ws.onmessage = e => this.emit('message', e);
        ws.onopen = e => this.emit('open', e);
        ws.onclose = e => {
            // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
            const code = e.code;
            if (
                code !== 1e3 &&
                code !== 1001 &&
                code !== 1005 &&
                options.reconnect
            ) {
                this.connect();
            }
            this.emit('close', e);
        };
        ws.onerror = e => {
            if (e && e.code === 'ECONNREFUSED' && options.reconnect) {
                this.connect();
            } else {
                this.emit('error', e);
            }
        };

        this._ws = ws;
    }
});

const defOpts = {
    protocols: [],
    reconnect: true
};
