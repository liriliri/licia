var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('values', function ()
{
    var values = _.values;

    it('get object values', function ()
    {
        expect(values({one: 1, two: 2})).to.eql([1, 2]);
    });

    it('do not get values from prototype', function ()
    {
        var obj = Object.create({three: 3});
        obj.one = 1;

        expect(values(obj)).to.eql([1]);
    });
});