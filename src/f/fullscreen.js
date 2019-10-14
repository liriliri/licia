/* Fullscreen api wrapper.
 *
 * ### request
 *
 * Request fullscreen.
 *
 * |Name  |Type   |Desc              |
 * |------|-------|------------------|
 * |[el]  |Element|Fullscreen element|
 *
 * ### exit
 *
 * Exit fullscreen.
 *
 * ### toggle
 *
 * Toggle fullscreen.
 *
 * |Name  |Type   |Desc              |
 * |------|-------|------------------|
 * |[el]  |Element|Fullscreen element|
 *
 * ### isActive
 *
 * Check Whether fullscreen is active.
 *
 * ### getEl
 *
 * Return Fullscreen element if exists.
 *
 * ### isEnabled
 *
 * Whether you are allowed to enter fullscreen.
 */

/* example
 * fullscreen.request();
 * fullscreen.isActive(); // -> false, not a synchronous api
 * fullscreen.on('error', () => {});
 * fullscreen.on('change', () => {});
 */

/* module
 * env: browser
 * test: browser
 * since: 1.4.0
 */

/* typescript
 * export declare namespace fullscreen {
 *     interface IFullscreen extends Emitter {
 *         request(el?: Element): void;
 *         exit(): void;
 *         toggle(el?: Element): void;
 *         isActive(): boolean;
 *         getEl(): Element | null;
 *         isEnabled(): boolean;
 *     }
 * }
 * export declare const fullscreen: fullscreen.IFullscreen;
 */

_('Emitter toBool');

const fnMap = [
    [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror'
    ],
    [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror'
    ],
    [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror'
    ],
    [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError'
    ]
];

let fn;

for (let i = 0, len = fnMap.length; i < len; i++) {
    fn = fnMap[i];
    if (fn[1] in document) {
        break;
    }
}

exports = {
    request(el = document.documentElement) {
        el[fn[0]]();
    },
    exit() {
        document[fn[1]]();
    },
    toggle(el = document.documentElement) {
        this.isActive() ? this.exit() : this.request(el);
    },
    isActive() {
        return toBool(this.getEl());
    },
    isEnabled() {
        return toBool(document[fn[3]]);
    },
    getEl() {
        return document[fn[2]];
    }
};

Emitter.mixin(exports);

document.addEventListener(fn[4], () => {
    exports.emit('change');
});
document.addEventListener(fn[5], () => {
    exports.emit('error');
});
