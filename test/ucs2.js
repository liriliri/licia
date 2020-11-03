it('encode', function() {
    expect(ucs2.encode([0x61, 0x62, 0x63])).to.equal('abc');
    const bigArr = [];
    const bigStr = [];
    for (let i = 0; i < 150000; i++) {
        bigArr[i] = 0x61;
        bigStr[i] = 'a';
    }
    expect(ucs2.encode(bigArr)).to.equal(bigStr.join(''));
});

it('decode', function() {
    expect('𝌆'.length).to.equal(2);
    expect(ucs2.decode('𝌆').length).to.equal(1);
});
