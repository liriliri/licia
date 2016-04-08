var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isFn', function ()
{
    var isFn = _.isFn;

    it('check if value is a function', function ()
    {
        expect(isFn(function () {})).to.be.true;
        expect(isFn({})).to.be.false;
    });
});