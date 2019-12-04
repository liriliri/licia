it('basic', () => {
    test('#test, input.user[name="licia"]', [
        [{ type: 'id', value: 'test' }],
        [
            { type: 'tag', value: 'input' },
            { type: 'class', value: 'user' },
            { type: 'attribute', value: 'name="licia"' }
        ]
    ]);
});

it('combinator', () => {
    test('#test input', [
        [
            { type: 'id', value: 'test' },
            { type: 'combinator', value: ' ' },
            { type: 'tag', value: 'input' }
        ]
    ]);
    test('#test > li', [
        [
            { type: 'id', value: 'test' },
            { type: 'combinator', value: '>' },
            { type: 'tag', value: 'li' }
        ]
    ]);
});

it('group', () => {
    test('#test, .test', [
        [{ type: 'id', value: 'test' }],
        [{ type: 'class', value: 'test' }]
    ]);
});

it('pseudo', () => {
    test('.test:hover', [
        [{ type: 'class', value: 'test' }, { type: 'pseudo', value: ':hover' }]
    ]);
    test('input::placeholder', [
        [
            { type: 'tag', value: 'input' },
            { type: 'pseudo', value: '::placeholder' }
        ]
    ]);
});

function test(cssSelector, targetGroups) {
    const groups = selector.parse(cssSelector);
    expect(groups).to.eql(targetGroups);
    expect(selector.stringify(groups)).to.equal(cssSelector);
}
