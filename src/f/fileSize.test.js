it('basic', function() {
    expect(fileSize(5)).to.equal('5');
    expect(fileSize(0)).to.equal('0');
    expect(fileSize(761)).to.equal('761');
    expect(fileSize(1500)).to.equal('1.46K');
    expect(fileSize(2462)).to.equal('2.4K');
    expect(fileSize(1500000)).to.equal('1.43M');
    expect(fileSize(1500000000)).to.equal('1.4G');
    expect(fileSize(4015492000)).to.equal('3.74G');
    expect(fileSize(1500000000000)).to.equal('1.36T');
});
