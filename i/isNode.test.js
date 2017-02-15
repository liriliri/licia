var isBrowser = typeof window === 'object';

it('node', function ()
{
    if (isBrowser) expect(isNode).to.be.false;
});

it('browser', function ()
{
    if (!isBrowser) expect(isNode).to.be.true;
});