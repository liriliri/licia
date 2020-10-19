/* Load image with given src.
 *
 * |Name|Desc           |
 * |----|---------------|
 * |src |Image source   |
 * |cb  |Onload callback|
 */

/* example
 * loadImg('http://eustia.liriliri.io/img.jpg', function(err, img) {
 *     console.log(img.width, img.height);
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function loadImg(src: string, cb?: types.AnyFn): void;
 */

_('noop types');

exports = function(src, cb) {
    cb = cb || noop;

    const img = new Image();
    img.onload = function() {
        cb(null, img);
    };
    img.onerror = function(err) {
        cb(err);
    };
    img.src = src;
};
