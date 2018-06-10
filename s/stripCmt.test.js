it('basic', function() {
    var source = [
        '// comment',
        'var a = 5;',
        '/* comment2',
        ' * comment3',
        ' */'
    ].join('\n');

    expect(stripCmt(source)).to.equal('\nvar a = 5;\n');
});

it('comment inside string', function() {
    var source = [
        'var a = "// Not a comment";',
        "var b = '// Not a comment';"
    ].join('\n');

    expect(stripCmt(source)).to.equal(
        'var a = "// Not a comment";\nvar b = \'// Not a comment\';'
    );
});

it('regexp', function() {
    var source = ['var reg = /test/g;'].join('\n');

    expect(stripCmt(source)).to.equal('var reg = /test/g;');
});
