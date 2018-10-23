it('basic', function() {
    expect(cmpVersion('1.1.8', '1.0.4')).to.equal(1);
    expect(cmpVersion('1.0.2', '1.0.2')).to.equal(0);
    expect(cmpVersion('2.0', '2.0.0')).to.equal(0);
    expect(cmpVersion('3.0.1', '3.0.0.2')).to.equal(1);
    expect(cmpVersion('1.1.1', '1.2.3')).to.equal(-1);
});
