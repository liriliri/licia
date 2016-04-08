var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('repeat', function ()
{
    var repeat = _.repeat;

    it('repeat string n times', function ()
    {
        expect(repeat('a', 3)).to.equal('aaa');
        expect(repeat('ab', 3)).to.equal('ababab');
    });

    it('return empty string when n < 1', function ()
    {
        expect(repeat('a', -2)).to.equal('');
    });
});