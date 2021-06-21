/* scripts
 * before: npm i --prefix .licia underscore@1.12.1
 */

const path = require('path');

const r = lazyRequire(require);
const _ = r('underscore');

const cache = require.cache;
if (!cache) return;

const underscorePath = path.resolve(
    __dirname,
    '../../.licia/node_modules/underscore/underscore.js'
);
expect(cache[underscorePath]).to.be.an('undefined');
expect(_().isNumber(5)).to.be.true;
expect(cache[underscorePath]).to.be.an('object');
