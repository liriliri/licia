/* Random bytes generator.
 *
 * Use crypto module in node or crypto object in browser if possible.
 *
 * |Name  |Type  |Desc                        |
 * |------|------|----------------------------|
 * |size  |number|Number of bytes to generate |
 * |return|object|Random bytes of given length|
 */

/* example
 * randomBytes(5); // -> [55, 49, 153, 30, 122]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function randomBytes(size: number): Uint8Array;
 */

_('random isBrowser isNode');

exports = function(size) {
    const ret = new Uint8Array(size);

    for (let i = 0; i < size; i++) ret[i] = random(0, 255);

    return ret;
};

let crypto;

if (isBrowser) {
    crypto = window.crypto || window.msCrypto;

    if (crypto) {
        exports = function(size) {
            const ret = new Uint8Array(size);

            crypto.getRandomValues(ret);

            return ret;
        };
    }
} else if (isNode) {
    crypto = require('crypto');

    exports = function(size) {
        return crypto.randomBytes(size);
    };
}
