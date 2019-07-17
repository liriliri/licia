it('basic', function() {
    expect(indent('foo\nbar')).to.equal('    foo\n    bar');
    expect(indent('foo\r\nbar')).to.equal('    foo\r\n    bar');
    expect(indent('foo\nbar', 2)).to.equal('  foo\n  bar');
    expect(indent('foo\nbar', '*', 2)).to.equal('**foo\n**bar');
});
