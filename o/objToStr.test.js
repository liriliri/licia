it('basic', function() {
    expect(objToStr(5)).to.equal('[object Number]');
    expect(objToStr('eustia')).to.equal('[object String]');
    expect(objToStr([])).to.equal('[object Array]');
});
