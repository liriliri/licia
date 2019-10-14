it('basic', function() {
    expect(isPromise(new Promise(function() {}))).to.be.true;
    expect(isPromise({})).to.be.false;
});
