it('escape special chars', function ()
{
    expect(escapeRegExp('[escape.reg.exp]')).to.equal('\\[escape\\.reg\\.exp\\]');
});