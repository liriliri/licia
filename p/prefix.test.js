it('basic', function () 
{
    expect(prefix('MozColor')).to.equal('color');
    expect(prefix('msColor')).to.equal('color');
    expect(prefix('OColor')).to.equal('color');
    expect(prefix('WebkitColor')).to.equal('color');
    expect(prefix('-moz-color')).to.equal('color');
    expect(prefix('-ms-color')).to.equal('color');
    expect(prefix('-o-color')).to.equal('color');
    expect(prefix('-webkit-color')).to.equal('color');
    expect(prefix('color')).to.equal('color');

    expect(prefix('text-emphasis')).to.equal('WebkitTextEmphasis');
});

it('dash', function () 
{
    expect(prefix.dash('text-emphasis')).to.equal('-webkit-text-emphasis');
    expect(prefix.dash('color')).to.equal('color');
});