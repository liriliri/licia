const htmlStr =
    '<!doctype html><!--comment--><div data-name="&quot;licia">test</div><div><span>name</span><span>licia</span></div>';

expect(html.parse('<div id="name">licia</div>')).to.eql([
    { tag: 'div', attrs: { id: 'name' }, content: ['licia'] }
]);

expect(html.parse('<div style=""></div>')).to.eql([
    { tag: 'div', attrs: { style: '' } }
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

expect(html.parse('<img class="icon" />')).to.eql([
    { tag: 'img', attrs: { class: 'icon' } }
]);
expect(html.parse('<bbb />')).to.eql([{ tag: 'bbb', attrs: {} }]);
expect(
    html.parse('<div><img src="a.png"/><bbb class="x"/><span>y</span></div>')
).to.eql([
    {
        tag: 'div',
        attrs: {},
        content: [
            { tag: 'img', attrs: { src: 'a.png' } },
            { tag: 'bbb', attrs: { class: 'x' } },
            { tag: 'span', attrs: {}, content: ['y'] }
        ]
    }
]);
