it('basic', function() {
    expect(splitPath('f:/foo/bar.txt')).to.eql({
        dir: 'f:/foo/',
        name: 'bar.txt',
        ext: '.txt'
    });
    expect(splitPath('/home/foo/bar.txt')).to.eql({
        dir: '/home/foo/',
        name: 'bar.txt',
        ext: '.txt'
    });
    expect(splitPath('/home/foo')).to.eql({
        dir: '/home/',
        name: 'foo',
        ext: ''
    });
    expect(splitPath('f:\\foo\\bar.txt')).to.eql({
        dir: 'f:\\foo\\',
        name: 'bar.txt',
        ext: '.txt'
    });
    expect(splitPath('  /home/foo.txt')).to.eql({
        dir: '  /home/',
        name: 'foo.txt',
        ext: '.txt'
    });
});
