it('true', function ()
{
    expect(endWith('ab', 'b')).to.be.true;
});

it('false', function () 
{
    expect(endWith('ab', 'a')).to.be.false;
});