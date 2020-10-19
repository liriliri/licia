expect(
    h(
        'div#test.title',
        {
            onclick() {},
            title: 'test',
            style: {
                background: 'red'
            }
        },
        'inner text',
        h('span.sub-title', 'inner text')
    ).outerHTML
).to.equal(
    '<div id="test" class="title" title="test" style="background: red;">inner text<span class="sub-title">inner text</span></div>'
);
