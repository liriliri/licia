expect(strHash('test')).to.equal(strHash('test'));
for (let i = 0; i < 1000; i++) {
    expect(strHash('test' + i)).to.be.at.least(0);
}
