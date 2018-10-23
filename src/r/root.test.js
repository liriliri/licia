var isNode = typeof window !== 'object';

it('browser', function() {
    if (!isNode) expect(root).to.equal(window);
});

it('node', function() {
    if (isNode) expect(root).to.equal(global);
});
