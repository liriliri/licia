/* Promised version of mini program wx object.
 */

/* example
 * wx.getStorage('test').then(res => {
 *     console.log(res.data);
 * });
 */

/* module
 * env: miniprogram
 * test: manual
 */

/* typescript
 * export declare const wx: any;
 */

_('each arrToMap startWith endWith');

// https://github.com/Tencent/wepy
const noPromiseMethods = arrToMap([
    'stopRecord',
    'getRecorderManager',
    'pauseVoice',
    'stopVoice',
    'pauseBackgroundAudio',
    'stopBackgroundAudio',
    'getBackgroundAudioManager',
    'createAudioContext',
    'createInnerAudioContext',
    'createVideoContext',
    'createCameraContext',

    'createMapContext',

    'canIUse',
    'startAccelerometer',
    'stopAccelerometer',
    'startCompass',
    'stopCompass',
    'onBLECharacteristicValueChange',
    'onBLEConnectionStateChange',

    'hideToast',
    'hideLoading',
    'showNavigationBarLoading',
    'hideNavigationBarLoading',
    'navigateBack',
    'createAnimation',
    'pageScrollTo',
    'createSelectorQuery',
    'createCanvasContext',
    'createContext',
    'drawCanvas',
    'hideKeyboard',
    'stopPullDownRefresh',

    'arrayBufferToBase64',
    'base64ToArrayBuffer'
]);

function needToPromisify(name) {
    return (
        !noPromiseMethods[name] &&
        !startWith(name, 'on') &&
        !endWith(name, 'Sync')
    );
}

each(wx, (fn, name) => {
    if (!needToPromisify(name)) return;

    exports[name] = function(obj) {
        return new Promise((resolve, reject) => {
            fn.call(wx, {
                ...obj,
                success(res) {
                    resolve(res);
                },
                fail(res) {
                    reject(res);
                }
            });
        });
    };
});
