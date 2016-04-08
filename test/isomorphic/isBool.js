var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isBool', function ()
{
    var isBool = _.isBool;

    it('true and false are booleans', function ()
    {
        expect(isBool(true)).to.be.true;
        expect(isBool(false)).to.be.true;
    });

    it('number, string are not booleans', function ()
    {
        expect(isBool(5)).to.be.false;
        expect(isBool('eustia')).to.be.false;
    });
});