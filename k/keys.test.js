it('basic', function () 
{
    expect(keys({a: 1})).to.eql(['a']);
    expect(keys({a: 1, b: 2}).length).to.equal(2);
});

it('only own properties', function () 
{
    var obj = Object.create({b: 1});
    obj.a = 1;
    expect(keys(obj)).to.eql(['a']);
});