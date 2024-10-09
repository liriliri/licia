it('true', function() {
    expect(
        isShadowRoot(
            document.createElement('div').attachShadow({ mode: 'open' })
        )
    ).to.be.true;
});

it('false', function() {
    expect(isShadowRoot(document.body)).to.be.false;
    expect(isShadowRoot(document.createElement('div'))).to.be.false;
});
