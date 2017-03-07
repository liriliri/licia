it('true', function ()
{
    expect(isNull(null)).to.be.true;
});

it('false', function () 
{
    expect(isNull(0)).to.be.false;
    expect(isNull({})).to.be.false;
});