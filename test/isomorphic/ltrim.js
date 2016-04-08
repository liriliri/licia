var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('ltrim', function ()
{
    var ltrim = _.ltrim;

    it('trim spaces', function ()
    {
        expect(ltrim(' eustia  ')).to.equal('eustia  ');
    });

    it('trim chars', function ()
    {
        expect(ltrim('eustia', 'ea')).to.equal('ustia');
    });
});