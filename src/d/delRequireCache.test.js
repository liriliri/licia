const path = require('path');

const fs = util.fs;

it('basic', async function() {
    this.timeout(10000);
    const licia = require('licia');
    licia.a = 5;
    delRequireCache('licia');
    expect(require('licia').a).to.be.undefined;

    const p = './delRequireCache.mod.js';
    await fs.writeFile(
        path.resolve(__dirname, p),
        'module.exports = {};',
        'utf8'
    );
    const mod = require(p);
    mod.a = 5;
    delRequireCache(p);
    expect(require(p).a).to.be.undefined;
    await fs.unlink(path.resolve(__dirname, p));
});
