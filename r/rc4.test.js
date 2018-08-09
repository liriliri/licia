it('basic encryption / decrytion', function() {
    const string = 'The quick brown fox jumps over the lazy dog'
    const key = '(a)licia keys'
    
    expect(rc4(rc4(string, key), key)).to.equal(string);
});
