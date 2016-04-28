it('get the longest item', function ()
{
    expect(longest(['a', 'abcde', 'abc'])).to.equal('abcde');
    expect(longest([])).to.be.undefined;
});