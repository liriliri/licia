/* RFC4122 version 4 compliant uuid generator.
 *
 * Check [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt) for reference.
 *
 * ```javascript
 * uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('randomBytes');

function exports() {
    var b = randomBytes(16);

    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;

    return (
        hexBytes[b[0]] +
        hexBytes[b[1]] +
        hexBytes[b[2]] +
        hexBytes[b[3]] +
        '-' +
        hexBytes[b[4]] +
        hexBytes[b[5]] +
        '-' +
        hexBytes[b[6]] +
        hexBytes[b[7]] +
        '-' +
        hexBytes[b[8]] +
        hexBytes[b[9]] +
        '-' +
        hexBytes[b[10]] +
        hexBytes[b[11]] +
        hexBytes[b[12]] +
        hexBytes[b[13]] +
        hexBytes[b[14]] +
        hexBytes[b[15]]
    );
}

var hexBytes = [];

for (var i = 0; i < 256; i++) {
    hexBytes[i] = (i + 0x100).toString(16).substr(1);
}
