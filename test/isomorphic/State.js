var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('State', function ()
{
    var State = _.State;

    var state;

    it('create a state with initial state "one"', function ()
    {
        state = new State('one', {
            oneToTwo: {
                from: 'one',
                to  : 'two'
            },
            twoToOne: {
                from: 'one',
                to  : 'two'
            }
        });

        expect(state.is('one')).to.be.true;
    });

    it('change state from "one" to "two"', function ()
    {
        state.oneToTwo();
        expect(state.is('two')).to.be.true;
    });
});