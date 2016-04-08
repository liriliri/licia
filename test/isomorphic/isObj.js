var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isObj', function ()
{
    var isObj = _.isObj;

    it('should return true if value is object', function ()
    {
        expect(isObj({})).to.be.true;
        expect(isObj(function () {})).to.be.true;
    });

    it('should return false if value is not object', function ()
    {
        expect(isObj(5)).to.be.false;
    });
});