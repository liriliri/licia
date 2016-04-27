it('indent each line in a string', function ()
{
    expect(indent('foo\nbar'), 'foo\n    bar');
    expect(indent('foo\r\nbar'), 'foo\r\n    bar');
    expect(indent('foo\nbar', 2), 'foo\n  bar');
    expect(indent('foo\nbar', '*', 2), 'foo\n**bar');
});