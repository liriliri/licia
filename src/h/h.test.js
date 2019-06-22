it('basic', function() {
    expect(
        h(
            'div#test.title',
            {
                onclick: function() {},
                title: 'test'
            },
            'inner text'
        ).outerHTML
    ).to.equal('<div id="test" class="title" title="test">inner text</div>');
});
