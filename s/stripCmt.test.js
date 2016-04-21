it('strip comments', function ()
{
    var source = [
        '// comment',
        'var a = 5;',
        '/* comment2',
        ' * comment3',
        ' *\/'
    ].join('\n');

    expect(stripCmt(source)).to.equal('\nvar a = 5;\n');
});