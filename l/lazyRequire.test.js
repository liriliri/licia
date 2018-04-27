var path = require('path');

var r = lazyRequire(require),
    _ = r('underscore');

it('basic', function () 
{
    var cache = require.cache;
    if (!cache) return;

    var underscorePath = path.resolve(__dirname, '../node_modules/underscore/underscore.js');
    expect(cache[underscorePath]).to.be.an('undefined');
    expect(_().isNumber(5)).to.be.true;
    expect(cache[underscorePath]).to.be.an('object');
});