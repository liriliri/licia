it('basic', function() {
    expect(toEl('<div>test</div>').textContent).to.equal('test');
});

it('multiple root element not allowed', function() {
    expect(toEl('<div>test</div><div>test</div>').textContent).to.equal('test');
});
