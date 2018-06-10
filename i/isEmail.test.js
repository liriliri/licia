it('basic', function() {
    expect(isEmail('surunzi@foxmail.com')).to.be.true;
    expect(isEmail('surunzi')).to.be.false;
    expect(isEmail('surunzi@')).to.be.false;
});
