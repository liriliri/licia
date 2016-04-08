var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('allKeys', function ()
{
    var allKeys = _.allKeys;

    it('retrieve all keys including those inherited', function ()
    {
        var obj = Object.create({ zero: 0 });
        obj.two = 1;

        expect(allKeys(obj)).to.contain('zero');
    });
});