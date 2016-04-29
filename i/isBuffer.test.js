it('return `true` for buffers', function ()
{
    expect(isBuffer(new Buffer(4))).to.be.true;
});

it('return `false` for non-buffers', function ()
{
    expect(isBuffer({})).to.be.false;
});