/* scripts
 * before: npm i --prefix .licia sm-crypto
 */

const randomBytes = util.randomBytes;
const content = randomBytes(256);
const crypto = require('crypto');
const smCrypto = require('sm-crypto');

const key = '0123456789abcdeffedcba9876543210';

benchmark({
    licia() {
        sm4.encrypt(content, key);
    },
    'sm-crypto'() {
        smCrypto.sm4.encrypt(content, key);
    },
    crypto() {
        cryptoSm4(content);
    }
});

function cryptoSm4(content) {
    const cipher = crypto.createCipheriv(
        'sm4-ecb',
        Buffer.from(key, 'hex'),
        null
    );
    return Buffer.concat([cipher.update(content), cipher.final()]);
}
