it('basic', function ()
{
    expect(stripHtmlTag('<p>Hello</p>')).to.equal('Hello');
});