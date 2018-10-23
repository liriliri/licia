var A = Class({
    initialize: function A(name, height) {
        this._name = name;
        this._height = height;
    },
    getName: function() {
        return this._name;
    },
    getHeight: function() {
        return this._height;
    },
    introduce: function() {
        return (
            'My name is ' +
            this._name +
            '. ' +
            "I'm " +
            this._height +
            ' meters tall. '
        );
    }
});

var B = A.extend({
    initialize: function B(name, height, bloodType) {
        this.callSuper(A, 'initialize', arguments);
        this._bloodType = bloodType;
    },
    getBloodType: function() {
        return this._bloodType;
    },
    introduce: function() {
        return (
            this.callSuper(A, 'introduce') +
            'And my blood type is ' +
            this._bloodType +
            '. '
        );
    }
});

var C = Class({
    initialize: function(name, height) {
        this._name = name;
        this._height = height;
    }
});

C.inherits(A);

var a = new A('eustia', 1.496),
    b = new B('eustia', 1.496, 'A'),
    c = new C('eustia', 1.496);

it('basic', function() {
    expect(a.getName()).to.equal('eustia');
});

it('extension', function() {
    expect(b.getHeight()).to.equal(1.496);
    expect(b.getBloodType()).to.equal('A');
});

it('callSuper and override', function() {
    expect(a.introduce()).to.equal(
        'My name is eustia. ' + "I'm 1.496 meters tall. "
    );
    expect(b.introduce()).to.equal(
        'My name is eustia. ' +
            "I'm 1.496 meters tall. " +
            'And my blood type is A. '
    );
});

it('instanceof', function() {
    expect(a instanceof A).to.be.true;
    expect(b instanceof B).to.be.true;
    expect(b instanceof A).to.be.true;
    expect(c instanceof C).to.be.true;
    expect(c instanceof A).to.be.true;
});

it('toString', function() {
    expect(a.toString()).to.equal('A');
    expect(b.toString()).to.equal('B');
});
