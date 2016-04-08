var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isNum', function ()
{
    var isNum = _.isNum;

    it('5 is number, string is not', function ()
    {
        expect(isNum(5)).to.be.true;
        expect(isNum('eustia')).to.be.false;
    });
});