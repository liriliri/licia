/* scripts
 * before: npm i --prefix .licia md5
 */

const randomBytes = util.randomBytes;
const content = randomBytes(256);
const crypto = require('crypto');
const nodeMd5 = require('md5');

benchmark({
    md5() {
        md5(content);
    },
    node() {
        nodeMd5(content);
    },
    crypto() {
        cryptoMd5(content);
    }
});

function cryptoMd5(content) {
    const hash = crypto.createHash('md5');
    hash.update(content);
    return hash.digest('hex');
}
