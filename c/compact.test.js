it('filter falsy values', function ()
{
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3]);
});