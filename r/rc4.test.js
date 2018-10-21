it('encryption', function() {
    expect(rc4.encrypt('licia', 'Hello world')).to.equal('j9y2VpSfR3AdNN8=');
    expect(rc4.encrypt('licia', '中文')).to.equal('IwF33G04');
});

it('decryption', function() {
    expect(rc4.decrypt('licia', 'j9y2VpSfR3AdNN8=')).to.equal('Hello world');
    expect(rc4.decrypt('licia', 'IwF33G04')).to.equal('中文');
});
