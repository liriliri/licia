it('encode', function() {
    expect(ucs2.decode('abc')).to.eql([0x61, 0x62, 0x63]);
});

it('decode', function() {
    expect(ucs2.encode([0x61, 0x62, 0x63])).to.equal('abc');
    expect('𝌆'.length).to.equal(2);
    expect(ucs2.decode('𝌆').length).to.equal(1);
});
