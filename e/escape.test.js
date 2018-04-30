it('basic', function ()
{
    expect(escape('&<>"\'`')).to.equal('&amp;&lt;&gt;&quot;&#x27;&#x60;');
    expect(escape('')).to.equal('');
});