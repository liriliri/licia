it('union elements in arrays', function ()
{
    expect(union(['a'], ['a', 'b', 'c'], ['d', 'e']).length).to.equal(5);
});