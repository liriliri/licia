it('return `true` if given values and keys contained', function ()
{
    expect(isMatch({a: 1, b: 2}, {a: 1})).to.be.true;
});

it('return `false` if given values and keys not contained', function ()
{
    expect(isMatch({a: 1}, {b: 2})).to.be.false;
});