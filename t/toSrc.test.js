it('basic', function () 
{
    expect(toSrc(Math.min)).to.equal('function min() { [native code] }');
    expect(toSrc(function () {})).to.equal('function () {}');
    expect(toSrc()).to.equal('');
});