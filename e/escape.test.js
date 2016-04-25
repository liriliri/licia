it('escape html', function ()
{
    expect(escape('&<>"\'`')).to.equal('&amp;&lt;&gt;&quot;&#x27;&#x60;')
});