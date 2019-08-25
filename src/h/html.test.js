const htmlStr =
    '<!doctype html><!--comment--><div data-name="&quot;licia">test</div><div><span>name</span><span>licia</span></div>';

it('basic', () => {
    expect(html.parse('<div id="name">licia</div>')).to.eql([
        { tag: 'div', attrs: { id: 'name' }, content: ['licia'] }
    ]);

    const tree = html.parse(htmlStr);
    expect(tree).to.eql([
        '<!doctype html>',
        '<!--comment-->',
        {
            tag: 'div',
            attrs: {
                'data-name': '"licia'
            },
            content: ['test']
        },
        {
            tag: 'div',
            attrs: {},
            content: [
                {
                    tag: 'span',
                    attrs: {},
                    content: ['name']
                },
                {
                    tag: 'span',
                    attrs: {},
                    content: ['licia']
                }
            ]
        }
    ]);

    expect(html.stringify(tree)).to.equal(htmlStr);
});
