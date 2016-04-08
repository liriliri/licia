var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('objToStr', function ()
{
    var objToStr = _.objToStr;

    it('alias of Object.prototype.toString', function ()
    {
        expect(objToStr('eustia')).to.equal('[object String]');
        expect(objToStr(function () {})).to.equal('[object Function]');
    });
});