var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('bind', function ()
{
    var bind = _.bind;

    it('create a function bound to a given object and arguments', function ()
    {
        var fn = bind(function (msg)
        {
            return this.name + ':' + msg;
        }, {name: 'eustia'}, 'I am a utility library.');

        expect(fn()).to.equal('eustia:I am a utility library.');
    });
});