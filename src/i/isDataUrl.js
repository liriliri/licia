/* Check if a string is a valid data url.
 *
 * |Name  |Type   |Desc                        |
 * |------|-------|----------------------------|
 * |str   |string |String to check             |
 * |return|boolean|True if string is a data url|
 */

/* example
 * isDataUrl('http://eustia.liriliri.io'); // -> false
 * isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('trim');

exports = function(str) {
    return regDataUrl.test(trim(str));
};

// https://tools.ietf.org/html/rfc2397
var regDataUrl = /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)$/i;
