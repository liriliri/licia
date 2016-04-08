var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('random', function ()
{
    var random = _.random;

    it('should return a random integer between min and max', function ()
    {
        expect(random(1, 5)).to.below(6).to.above(0);
    });
});