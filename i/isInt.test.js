it('true', function ()
{
    expect(isInt(5)).to.be.true;
});

it('false', function () 
{
    expect(isInt(5.1)).to.be.false;
    expect(isInt({})).to.be.false;
});