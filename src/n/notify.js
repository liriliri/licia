/* Wrapper for the Web Notifications API.
 *
 * |Name   |Type  |Desc                |
 * |-------|------|--------------------|
 * |title  |string|Notification title  |
 * |options|object|Notification options|
 *
 * You can pass exactly the same options supported in the [Web Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification).
 *
 * ### Notification
 *
 * Use this to create instance when certain events like close, show, click or error needed to be handled.
 */

/* example
 * notify('licia', {
 *     body: 'This is the notification content'
 * });
 * const notification = new notify.Notification('licia', {
 *     body: 'This is the notification content'
 * });
 * notification.on('error', err => console.log(err));
 * notification.on('click', e => console.log(e));
 * notification.show();
 */

/* module
 * env: browser
 * since: 1.14.0
 */

/* typescript
 * export declare namespace notify {
 *     class Notification extends Emitter {
 *         constructor(title: string, options?: object);
 *         show(): void;
 *     }
 * }
 * export declare function notify(title: string, options?: object): void;
 */

_('Emitter root each');

const Notification = root.Notification;

exports = function(title, options) {
    const notification = new exports.Notification(title, options);
    notification.show();
};

exports.Notification = Emitter.extend({
    initialize: function Notification(title, options = {}) {
        this._options = options;
        this._title = title;
        this.callSuper(Emitter, 'initialize', arguments);
    },
    handleEvent(e) {
        this.emit(e.type, e);
    },
    show() {
        if (!Notification) {
            return this.emit('error', Error('Notification is not supported'));
        }
        if (Notification.permission === 'granted') {
            this._show();
        } else {
            Notification.requestPermission(permission => {
                switch (permission) {
                    case 'granted':
                        this._show();
                        break;
                    case 'denied':
                        this.emit(
                            'error',
                            Error('Notification permission is denied')
                        );
                        break;
                }
            });
        }
    },
    _show() {
        const notification = new Notification(this._title, this._options);

        each(['show', 'close', 'click'], type => {
            notification.addEventListener(type, this, false);
        });
    }
});
