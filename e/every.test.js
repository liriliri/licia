it('check if all elements pass the truthy test', function ()
{
    function even(val) { return val % 2 === 0}

    expect(every([2, 4], even)).to.be.true;
    expect(every([1, 2, 4], even)).to.be.false;
});