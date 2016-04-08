var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('isArr', function ()
{
    var isArr = _.isArr;

    it('check if value is an Array', function ()
    {
        expect(isArr([5, 2])).to.be.true;
        expect(isArr(function () {})).to.be.false;
        expect(isArr({})).to.be.false;
    });
});