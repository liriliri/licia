it('basic', function() {
    const src = '/* line one\n * line two\n */';

    expect(extractBlockCmts(src)).to.eql(['line one\n line two']);
});

it('empty', function() {
    expect(extractBlockCmts('')).to.eql([]);
});
