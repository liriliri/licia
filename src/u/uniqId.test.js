it('basic', function() {
    const a = uniqId();
    const b = uniqId();

    expect(a).to.not.equal(b);
});

it('prefix', function() {
    const a = uniqId('eustia');

    expect(a.indexOf('eustia')).to.equal(0);
});
