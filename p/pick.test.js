it('basic', function ()
{
    expect(pick({a: 1, b: 2}, 'a')).to.eql({a: 1});
    expect(pick({a: 1, b: 2, c: 3}, ['b', 'c'])).to.eql({b: 2, c: 3});
    expect(pick({a: 1, b: 2, c: 3, d: 4}, function (val)
    {
        return val % 2;
    })).to.eql({a: 1, c: 3});
    expect(pick({a: 1, b: 2}, function (val, key)
    {
        return key === 'a';
    })).to.eql({a: 1});
});