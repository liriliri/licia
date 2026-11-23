const key = '0123456789abcdeffedcba9876543210';
const keyBytes = [
    0x01,
    0x23,
    0x45,
    0x67,
    0x89,
    0xab,
    0xcd,
    0xef,
    0xfe,
    0xdc,
    0xba,
    0x98,
    0x76,
    0x54,
    0x32,
    0x10
];
const iv = 'fedcba98765432100123456789abcdef';
const ivBytes = [
    0xfe,
    0xdc,
    0xba,
    0x98,
    0x76,
    0x54,
    0x32,
    0x10,
    0x01,
    0x23,
    0x45,
    0x67,
    0x89,
    0xab,
    0xcd,
    0xef
];
const msg = 'hello world! 我是 juneandgreen.';
const msgBytes = [
    0x68,
    0x65,
    0x6c,
    0x6c,
    0x6f,
    0x20,
    0x77,
    0x6f,
    0x72,
    0x6c,
    0x64,
    0x21,
    0x20,
    0xe6,
    0x88,
    0x91,
    0xe6,
    0x98,
    0xaf,
    0x20,
    0x6a,
    0x75,
    0x6e,
    0x65,
    0x61,
    0x6e,
    0x64,
    0x67,
    0x72,
    0x65,
    0x65,
    0x6e,
    0x2e
];
const output1 =
    '681edf34d206965e86b3e94f536e4246002a8a4efa863ccad024ac0300bb40d2';
const output2 = '681edf34d206965e86b3e94f536e4246';
const output3 =
    '681edf34d206965e86b3e94f536e4246681edf34d206965e86b3e94f536e4246002a8a4efa863ccad024ac0300bb40d2';
const output4 =
    '0e395deb10f6e8a17e17823e1fd9bd98a1bff1df508b5b8a1efb79ec633d1bb129432ac1b74972dbe97bab04f024e89c';
const output5 =
    '0d6cfa73c823b2ac0d6a92c564171892000fbea90be7a4d440bc58a9044fcb5f3d1615d91a6dbfb4dfb0c6915071527b';
const output6 =
    'a0b1aac2e6db928ddfc8a081a6661d0452b44e5720db106714ffc8cbee29bcf7d96b4d64bffd07553e6a2ee096523b7f';
// Same as output6 but with a broken padding.
const output7 =
    'a0b1aac2e6db928ddfc8a081a6661d0452b44e5720db106714ffc8cbee29bcf7d96b4d64bffd07553e6a2ee096523b00';

it('encrypt', () => {
    expect(sm4.encrypt(keyBytes, key)).to.equal(output1);
    expect(sm4.encrypt(keyBytes, keyBytes)).to.equal(output1);
    expect(sm4.encrypt(keyBytes, key, { padding: 'pkcs#5' })).to.equal(output1);
    expect(sm4.encrypt(keyBytes, key, { padding: 'none' })).to.equal(output2);
    expect(sm4.encrypt(msg, key)).to.equal(output4);
    expect(sm4.encrypt(msgBytes, key)).to.equal(output4);
    expect(sm4.encrypt(msg, key, { mode: 'cbc', iv })).to.equal(output5);
    expect(sm4.encrypt(msg, key, { mode: 'cbc', iv: ivBytes })).to.equal(
        output5
    );
    expect(sm4.encrypt([].concat(keyBytes, keyBytes), key)).to.equal(output3);
    expect(sm4.encrypt('🇨🇳𠮷😀😃😄😁😆😅', key)).to.equal(output6);
});

it('decrypt', () => {
    expect(sm4.decrypt(output1, key, { output: 'array' })).to.eql(keyBytes);
    expect(sm4.decrypt(output4, key)).to.equal(msg);
    expect(sm4.decrypt(output5, key, { mode: 'cbc', iv })).to.equal(msg);
    expect(sm4.decrypt(output6, key)).to.equal('🇨🇳𠮷😀😃😄😁😆😅');
});

it('output array', () => {
    expect(sm4.encrypt(keyBytes, key, { output: 'array' })).to.eql(
        util.strToBytes(output1, 'hex')
    );
    expect(sm4.decrypt(output1, key, { output: 'array' })).to.eql(keyBytes);
    expect(
        sm4.decrypt(output2, key, { padding: 'none', output: 'array' })
    ).to.eql(keyBytes);
    expect(sm4.decrypt(output3, key, { output: 'array' })).to.eql(
        [].concat(keyBytes, keyBytes)
    );
    expect(sm4.decrypt(output4, key, { output: 'array' })).to.eql(msgBytes);
});

it('invalid options', () => {
    expect(() => sm4.encrypt(msg, key, { mode: 'ctr' })).to.throw(
        'Invalid mode'
    );
    expect(() => sm4.encrypt(msg, key, { padding: 'zero' })).to.throw(
        'Invalid padding'
    );
    expect(() => sm4.encrypt(msg, '0123456789abcdeffedcba987654321')).to.throw(
        'Invalid key'
    );
    expect(() => sm4.encrypt(msg, key, { mode: 'cbc' })).to.throw('Invalid iv');
    expect(() => sm4.encrypt(msg, key, { output: 'ARRAY' })).to.throw(
        'Invalid output'
    );
    expect(() => sm4.encrypt(msg, key, { padding: 'none' })).to.throw(
        'Data is not a multiple of 16 bytes'
    );
    expect(() => sm4.encrypt(12345, key)).to.throw('Invalid input');
    expect(() => sm4.decrypt(output7, key)).to.throw('Invalid padding');
});
