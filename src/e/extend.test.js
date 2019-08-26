it('basic', function() {
    const srcB = { a: 'override', b: 'b' };
    const srcC = Object.create({ c: 'c' });

    expect(extend({ a: 'a' }, srcB, srcC)).to.deep.equal({
        a: 'override',
        b: 'b',
        c: 'c'
    });
});
