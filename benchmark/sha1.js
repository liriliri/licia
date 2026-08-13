/* scripts
 * before: npm i --prefix .licia js-sha1
 */

const randomBytes = util.randomBytes;
const content = randomBytes(256);
const crypto = require('crypto');
const jsSha1 = require('js-sha1');

benchmark({
    sha1() {
        sha1(content);
    },
    'js-sha1'() {
        jsSha1(content);
    },
    crypto() {
        cryptoSha1(content);
    }
});

function cryptoSha1(content) {
    const hash = crypto.createHash('sha1');
    hash.update(content);
    return hash.digest('hex');
}
