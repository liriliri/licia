expect(
    h(
        'div#test.title',
        {
            onclick() {},
            title: 'test'
        },
        'inner text'
    ).outerHTML
).to.equal('<div id="test" class="title" title="test">inner text</div>');
