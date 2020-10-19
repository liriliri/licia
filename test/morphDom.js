const toEl = util.toEl;

it('basic', () => {
    const el1 = document.createElement('div');
    el1.className = 'test';
    const el2 = document.createElement('div');
    el2.className = 'licia';
    morphDom(el1, el2);
    expect(el1.className).to.equal('licia');

    t('<i>test</i>', 'licia');
    t('<div></div>', '<div><span>licia</span><span>licia</span></div>');
    t('<div><span>test</span><span>test</span></div>', '<div></div>');
});

it('tagname', () => t('<i>test</i>', '<b>test</b>'));

it('text', () => t('test', 'licia'));

it('comment', () => t('<!-- test -->', '<!-- licia -->'));

it('attributes', () => {
    t(
        '<div class="test" style="width: 15px;"></div>',
        '<div class="licia" id="test"></div>'
    );
});

it('children', () => {
    t(
        '<div class="test"><span>test</span><span>test</span><!-- test --></div>',
        '<div class="licia"><span>licia</span><!-- licia --></div>'
    );
});

function t(from, to) {
    from = toEl(from);
    const morphed = morphDom(from, to);
    let val = morphed.outerHTML || morphed.nodeValue;
    if (morphed.nodeType === 8) {
        val = `<!--${val}-->`;
    }
    expect(val).to.equal(to);
}
