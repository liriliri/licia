it('basic', function ()
{
    expect(upperFirst('red')).to.equal('Red');
    expect(upperFirst('rED')).to.equal('RED');
});

it('empty', function () 
{
    expect(upperFirst('')).to.equal('');
});