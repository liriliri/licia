it('basic', function() {
    const a = { name: 'licia' };
    const b = clone(a);

    expect(a).to.eql(b);
    expect(a).to.not.equal(b);
});

it('array', function() {
    const a = [1, '2'];
    const b = clone(a);

    expect(a).to.eql(b);
    expect(a).to.not.equal(b);
});

it('not object', function() {
    expect(clone('')).to.equal('');
    expect(clone(5)).to.equal(5);
});
