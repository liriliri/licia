var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('rtrim', function ()
{
    var rtrim = _.rtrim;

    it('trim spaces', function ()
    {
        expect(rtrim(' eustia  ')).to.equal(' eustia');
    });

    it('trim chars', function ()
    {
        expect(rtrim('eustia', 'ea')).to.equal('eusti');
    });
});