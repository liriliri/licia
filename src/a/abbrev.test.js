test([
    [{}],
    ['a', { a: 'a' }],
    [
        'lina',
        'luna',
        {
            li: 'lina',
            lin: 'lina',
            lina: 'lina',
            lu: 'luna',
            lun: 'luna',
            luna: 'luna'
        }
    ],
    [
        'fool',
        'foom',
        'pool',
        'pope',
        {
            fool: 'fool',
            foom: 'foom',
            poo: 'pool',
            pool: 'pool',
            pop: 'pope',
            pope: 'pope'
        }
    ],
    [
        'ruby',
        'ruby',
        'rules',
        'rules',
        {
            rub: 'ruby',
            ruby: 'ruby',
            rul: 'rules',
            rule: 'rules',
            rules: 'rules'
        }
    ],
    [
        'foo',
        'fool',
        'folding',
        'flop',
        {
            fl: 'flop',
            flo: 'flop',
            flop: 'flop',
            fol: 'folding',
            fold: 'folding',
            foldi: 'folding',
            foldin: 'folding',
            folding: 'folding',
            foo: 'foo',
            fool: 'fool'
        }
    ],
    [
        'a',
        'ab',
        'abc',
        'abcd',
        'abcde',
        'acde',
        {
            a: 'a',
            ab: 'ab',
            abc: 'abc',
            abcd: 'abcd',
            abcde: 'abcde',
            ac: 'acde',
            acd: 'acde',
            acde: 'acde'
        }
    ]
]);
