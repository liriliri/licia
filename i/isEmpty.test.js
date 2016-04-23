it('return `true` for empty values', function ()
{
    expect(isEmpty([])).to.be.true;
    expect(isEmpty({})).to.be.true;
    expect(isEmpty(null)).to.be.true;

});

it('return `false` for non empty values', function ()
{
    expect(isEmpty([1])).to.be.false;
    expect(isEmpty({a: 1})).to.be.false;
});