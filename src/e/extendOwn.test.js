it('basic', function() {
    const srcB = { a: 'override', b: 'b' };
    const srcC = Object.create({ c: 'c' });

    expect(extendOwn({ a: 'a' }, srcB, srcC)).to.deep.equal({
        a: 'override',
        b: 'b'
    });
});
