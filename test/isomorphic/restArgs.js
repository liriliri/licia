var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('restArgs', function ()
{
    var restArgs = _.restArgs;

    it('accumulates the arguments passed into an array', function ()
    {
        var paramArr = restArgs(function (first, rest) { return rest });

        expect(paramArr(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });

    it('can pass in a start index', function ()
    {
        var paramArr = restArgs(function (first, two, rest) { return two }, 1);

        expect(paramArr(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });
});