var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('has', function ()
{
    var has = _.has;

    it('return true if given key is a direct property', function ()
    {
        var obj = Object.create({zero: 0});
        obj.one = 1;

        expect(has(obj, 'zero')).to.be.false;
        expect(has(obj, 'one')).to.be.true;
    });
});