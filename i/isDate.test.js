it('return `true` for Date objects', function ()
{
    expect(isDate(new Date)).to.be.true;
});

it('return `false` for non Date objects', function ()
{
    expect(isDate(5)).to.be.false;
});