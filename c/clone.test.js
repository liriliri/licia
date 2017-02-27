it('basic', function ()
{
    var a = {name: 'eris'},
        b = clone(a);

    expect(a).to.eql(b);
    expect(a).to.not.equal(b);
});

it('array', function () 
{
    var a = [1, '2'],
        b = clone(a);

    expect(a).to.eql(b);
    expect(a).to.not.equal(b);
});

it('not object', function () 
{
    expect(clone('')).to.equal('');
    expect(clone(5)).to.equal(5);
});