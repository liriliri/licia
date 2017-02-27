it('true', function ()
{
    expect(isEmpty([])).to.be.true;
    expect(isEmpty({})).to.be.true;
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty(arguments)).to.be.true;
});

it('false', function ()
{
    expect(isEmpty([1])).to.be.false;
    expect(isEmpty({a: 1})).to.be.false;
});