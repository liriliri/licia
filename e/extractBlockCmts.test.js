it('extract block comments', function ()
{
    var src = '\/* line one\n * line two\n */';

    expect(extractBlockCmts(src)).to.deep.equal(['line one\n line two']);
});