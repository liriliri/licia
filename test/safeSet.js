const { expect } = require('chai');

it('basic', function() {
    const obj = {};
    safeSet(obj, 'a.aa.aaa', 1);
    expect(obj).to.eql({ a: { aa: { aaa: 1 } } });
    safeSet(obj, ['a', 'aa'], 2);
    expect(obj).to.eql({ a: { aa: 2 } });
    safeSet(obj, 'a.b', 3);
    expect(obj).to.eql({ a: { aa: 2, b: 3 } });
    safeSet(obj, [0, 'a'], 4);
    expect(obj).to.eql({ a: { aa: 2, b: 3 }, 0: { a: 4 } });
});

it('prototype pollution', function() {
    const a = {};
    safeSet({}, '__proto__.oops', 'It works!');
    expect(a.oops).to.not.equal('It works!');

    safeSet({}, 'constructor.prototype.oops', 'It works!');
    expect(a.oops).to.not.equal('It works!');
});
