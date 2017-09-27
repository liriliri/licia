it('basic', function () 
{
    expect(castPath('a')).to.eql(['a']);
    expect(castPath(['a'])).to.eql(['a']);
    expect(castPath('a.b.c')).to.eql(['a', 'b', 'c']);
    expect(castPath('a.b.c', {
        'a.b.c': true
    })).to.eql(['a.b.c']);
    expect(castPath('a[0]')).to.eql(['a', '0']);
    expect(castPath('a["b"]')).to.eql(['a', 'b']);
    expect(castPath('a["b"][0].c')).to.eql(['a', 'b', '0', 'c']);
});