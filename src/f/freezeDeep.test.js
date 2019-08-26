it('basic', function() {
    const a = { b: { c: 1 } };
    freezeDeep(a);
    a.b.c = 2;
    expect(a).to.eql({ b: { c: 1 } });
});
