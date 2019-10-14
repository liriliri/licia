it('basic', function() {
    expect(isGeneratorFn(function*() {})).to.be.true;
    expect(isGeneratorFn(function() {})).to.be.false;
});
