it('basic', () => {
    t('#t, input.user[name="licia"]', [
        [{ type: 'id', value: 't' }],
        [
            { type: 'tag', value: 'input' },
            { type: 'class', value: 'user' },
            { type: 'attribute', value: 'name="licia"' }
        ]
    ]);
});

it('combinator', () => {
    t('#t input', [
        [
            { type: 'id', value: 't' },
            { type: 'combinator', value: ' ' },
            { type: 'tag', value: 'input' }
        ]
    ]);
    t('#t > li', [
        [
            { type: 'id', value: 't' },
            { type: 'combinator', value: '>' },
            { type: 'tag', value: 'li' }
        ]
    ]);
});

it('group', () => {
    t('#t, .t', [
        [{ type: 'id', value: 't' }],
        [{ type: 'class', value: 't' }]
    ]);
});

it('pseudo', () => {
    t('.t:hover', [
        [{ type: 'class', value: 't' }, { type: 'pseudo', value: ':hover' }]
    ]);
    t('input::placeholder', [
        [
            { type: 'tag', value: 'input' },
            { type: 'pseudo', value: '::placeholder' }
        ]
    ]);
});

function t(cssSelector, targetGroups) {
    const groups = selector.parse(cssSelector);
    expect(groups).to.eql(targetGroups);
    expect(selector.stringify(groups)).to.equal(cssSelector);
}
