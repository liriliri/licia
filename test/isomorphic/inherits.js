var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('inherits', function ()
{
    var inherits = _.inherits;

    it('A inherits B to have B\'s prototype', function ()
    {
        var A = function () {},
            B = function () {};

        A.prototype = { a: 0 };
        B.prototype = { b: 1 };

        inherits(A, B);

        var a = new A();

        expect(a.b).to.equal(1);
    });
});