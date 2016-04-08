var _ = require('../isomorphic'),
    chai = require('chai');

var expect = chai.expect;

describe('Class', function ()
{
    var Class = _.Class;

    var A = new Class({
        initialize: function (name, height)
        {
            this._name   = name;
            this._height = height;
        },
        getName  : function () { return this._name },
        getHeight: function () { return this._height },
        introduce: function ()
        {
            return 'My name is ' + this._name + '. ' +
                   'I\'m ' + this._height + ' meters tall. ';
        }
    });

    var B = A.extend({
        initialize: function (name, height, bloodType)
        {
            this._bloodType = bloodType;
        },
        getBloodType: function () { return this._bloodType },
        introduce   : function ()
        {
            return this.callSuper('introduce') + 'And my blood type is ' +
                   this._bloodType + '. ';
        }
    });

    var a = new A('eustia', 1.496),
        b = new B('eustia', 1.496, 'A');

    it('basic class creation', function ()
    {
        expect(a.getName()).to.equal('eustia');
    });

    it('basic class extension', function ()
    {
        expect(b.getHeight()).to.equal(1.496);
        expect(b.getBloodType()).to.equal('A');
    });

    it('callSuper and override', function ()
    {
        expect(a.introduce()).to.equal('My name is eustia. ' +
                                       'I\'m 1.496 meters tall. ');
        expect(b.introduce()).to.equal('My name is eustia. ' +
                                       'I\'m 1.496 meters tall. ' +
                                       'And my blood type is A. ');
    });
});