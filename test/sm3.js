tests([
    [
        'licia',
        '33b901397725075d898a5508b2f0f3c3016d280a8c1658b7d172ba258cdfb150'
    ],
    [
        '中文',
        'a16c22b2e1f51d723df51cb481f4680176a720849ee66440e78711112eed7e47'
    ],
    ['abc', '66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0'],
    [
        'abcdefghABCDEFGH12345678',
        'd670c7f027fd5f9f0c163f4bfe98f9003fe597d3f52dbab0885ec2ca8dd23e9b'
    ],
    [
        'abcdefghABCDEFGH12345678abcdefghABCDEFGH12345678abcdefgh',
        '1cf3bafec325d7d9102cd67ba46b09195af4e613b6c2b898122363d810308b11'
    ],
    [
        'abcdefghABCDEFGH12345678abcdefghABCDEFGH12345678abcdefghABCD',
        'b8ac4203969bde27434ce667b0adbf3439ee97e416e73cb96f4431f478a531fe'
    ],
    [
        'abcdefghABCDEFGH12345678abcdefghABCDEFGH12345678abcdefghABCDEFGH',
        '5ef0cdbe0d54426eea7f5c8b44385bb1003548735feaa59137c3dfe608aa9567'
    ],
    [
        'abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd',
        'debe9ff92275b8a138604889c18e5a4d6fdb70e5387e5765293dcba39c0c5732'
    ],
    [
        '你好',
        '78e5c78c5322ca174089e58dc7790acf8ce9d542bee6ae4a5a0797d5e356be61'
    ],
    [
        '今天天气真是不错',
        'fff6e05118c782f5a2cea8bc2efec8819d0dc6d7d09cb9aa5c4ef14e673fa043'
    ],
    [
        '🇨🇳𠮷😀😃😄😁😆😅',
        'b6d217a24511ddb7593f13b74519038618cbb5b947fee20da3f0cd5503152c23'
    ],
    [
        'hello world! 我是 juneandgreen.',
        'ef1cc8e36012c1f1bc18034ab778ef800e8bb1b40c7a4c7177186f6fd521110e'
    ],
    [
        util.strToBytes('licia'),
        '33b901397725075d898a5508b2f0f3c3016d280a8c1658b7d172ba258cdfb150'
    ],
    [
        util.strToBytes('中文'),
        'a16c22b2e1f51d723df51cb481f4680176a720849ee66440e78711112eed7e47'
    ]
]);

it('hmac', () => {
    expect(
        sm3('abc', {
            key:
                'daac25c1512fe50f79b0e4526b93f5c0e1460cef40b6dd44af13caec62e8c60e0d885f3c6d6fb51e530889e6fd4ac743a6d332e68a0f2a3923f42585dceb93e9'
        })
    ).to.equal(
        '5c690e2b822a514017f1ccb9a61b6738714dbd17dbd6fdbc2fa662d122b6885d'
    );

    expect(
        sm3([0x31, 0x32, 0x33, 0x34, 0x35, 0x36], {
            key: '31323334353637383930'
        })
    ).to.equal(
        'bc1f71eef901223ae7a9718e3ae1dbf97353c81acb429b491bbdbefd2195b95e'
    );

    const bytes8 = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08];
    const bytes32 = [].concat(bytes8, bytes8, bytes8, bytes8);
    const bytes64 = [].concat(bytes32, bytes32);
    const bytes128 = [].concat(bytes64, bytes64);

    expect(sm3(bytes32, { key: bytes32 })).to.equal(
        '41e6589cde89b4f8c810a820c2fb6f0ad86bf2c136a19cfb3a5c0835f598e07b'
    );
    expect(sm3(bytes64, { key: bytes64 })).to.equal(
        'd6fb17c240930a21996373aa9fc0b1092931b016640809297911cd3f8cc9dcdd'
    );
    expect(sm3(bytes128, { key: bytes128 })).to.equal(
        'd374f8adb0e9d1f12de94c1406fe8b2d53f84129e033f0d269400de8e8e7ca1a'
    );
});

it('invalid options', () => {
    expect(() => sm3('abc', { mode: 'sha256', key: '31323334' })).to.throw(
        'Invalid mode'
    );
    expect(() => sm3('abc', {})).to.throw('Invalid key');
    expect(() => sm3(12345)).to.throw('Invalid input');
    expect(() => sm3('abc', { key: 12345 })).to.throw('Invalid input');
});
