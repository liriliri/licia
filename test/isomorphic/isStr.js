var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isStr', function ()
{
    var isStr = _.isStr;

    it('"eustia" is string, number is not', function ()
    {
        expect(isStr('eustia')).to.be.true;
        expect(isStr(5)).to.be.false;
    });
});