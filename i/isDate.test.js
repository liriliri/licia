it('true', function ()
{
    expect(isDate(new Date)).to.be.true;
});

it('false', function ()
{
    expect(isDate(5)).to.be.false;
});