var obj = Object.create({one: 1});
obj.two = 2;

it('return `true` for direct properties', function ()
{
    expect(has(obj, 'two')).to.be.true;
});

it('return `false` if no such direct property', function ()
{
    expect(has(obj, 'one')).to.be.false;
    expect(has(obj, 'three')).to.be.false;
});