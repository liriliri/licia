it('strip html tags', function ()
{
    expect(stripHtmlTag('<p>Hello</p>')).to.equal('Hello');
});