it('basic', () => {
    expect(crc32('1234567890').toString(16)).to.equal('261daee5');
});
