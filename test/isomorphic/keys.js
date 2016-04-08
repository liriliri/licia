var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('keys', function ()
{
    var keys = _.keys;

    it('get object keys', function ()
    {
        expect(keys({
            zero: 0,
            one: 1
        })).to.eql(['zero', 'one']);
    });

    it('do not get keys on object prototypes', function ()
    {
        expect(keys(Object.create({two: 2}))).to.eql([]);
    });
});