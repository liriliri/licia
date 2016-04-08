var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('rpad', function ()
{
    var rpad = _.rpad;

    it('add chars to the right if length is < minLength', function ()
    {
        expect(rpad('ab', 0, '-')).to.equal('ab');
        expect(rpad('ab', 4, '-')).to.equal('ab--');
    });
});