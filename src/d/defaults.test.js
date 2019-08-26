it('basic', function() {
    const srcB = { a: 'override', b: 'b' };
    const srcC = Object.create({ c: 'c' });

    expect(defaults({ a: 'a' }, srcB, srcC)).to.deep.equal({
        a: 'a',
        b: 'b',
        c: 'c'
    });
});
