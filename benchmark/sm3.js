/* scripts
 * before: npm i --prefix .licia sm-crypto
 */

const randomBytes = util.randomBytes;
const content = randomBytes(256);
const crypto = require('crypto');
const smCrypto = require('sm-crypto');

benchmark({
    licia() {
        sm3(content);
    },
    'sm-crypto'() {
        smCrypto.sm3(content);
    },
    crypto() {
        cryptoSm3(content);
    }
});

function cryptoSm3(content) {
    const hash = crypto.createHash('sm3');
    hash.update(content);
    return hash.digest('hex');
}
