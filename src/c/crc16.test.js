it('basic', () => {
    expect(crc16('1234567890').toString(16)).to.equal('c57a');
});
