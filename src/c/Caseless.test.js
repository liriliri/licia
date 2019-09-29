it('basic', () => {
    const headers = { 'Content-Type': 'text/javascript' };
    const c = new Caseless(headers);
    c.set('content-type', 'text/css');
    expect(headers).to.eql({ 'Content-Type': 'text/css' });
    expect(c.getKey('content-type')).to.equal('Content-Type');
    expect(c.get('content-type')).to.equal('text/css');
    expect(c.has('content-type')).to.be.true;
    c.remove('content-type');
    expect(c.has('content-type')).to.be.false;
});
