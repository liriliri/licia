var isNode = typeof window !== 'object';

it('node', function() {
    if (isNode) expect(isBrowser).to.be.false;
});

it('browser', function() {
    if (!isNode) expect(isBrowser).to.be.true;
});
