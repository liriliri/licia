it('basic', function ()
{
    expect(reject([1, 2, 3, 4, 5], function (val)
    {
        return val % 2 === 0;
    })).to.eql([1, 3, 5]);

    expect(reject([1, 2, 3], function (val) 
    {
        return this.indexOf(val) > -1;
    }, [1, 2])).to.eql([3]);
});