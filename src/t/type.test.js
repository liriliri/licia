it('basic', function() {
    expect(type({})).to.equal('object');
    expect(type([])).to.equal('array');
    expect(type([], false)).to.equal('Array');
    expect(type(5)).to.equal('number');
    expect(type(null)).to.equal('null');
    expect(type(function() {})).to.equal('function');
    expect(type(async function() {}, false)).to.equal('AsyncFunction');
    expect(type(undefined)).to.equal('undefined');
    expect(type(+'a')).to.equal('nan');
});
