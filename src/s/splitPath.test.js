tests([
    [
        'f:/foo/bar.txt',
        {
            dir: 'f:/foo/',
            name: 'bar.txt',
            ext: '.txt'
        }
    ],
    [
        '/home/foo/bar.txt',
        {
            dir: '/home/foo/',
            name: 'bar.txt',
            ext: '.txt'
        }
    ],
    [
        '/home/foo',
        {
            dir: '/home/',
            name: 'foo',
            ext: ''
        }
    ],
    [
        'f:\\foo\\bar.txt',
        {
            dir: 'f:\\foo\\',
            name: 'bar.txt',
            ext: '.txt'
        }
    ],
    [
        '  /home/foo.txt',
        {
            dir: '  /home/',
            name: 'foo.txt',
            ext: '.txt'
        }
    ]
]);
