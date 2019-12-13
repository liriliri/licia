test([
    ['http://www.example.com?foo=bar&param=test', true],
    ['test', false],
    ['ftp://www.example.com', true],
    ['http://127.0.0.1', true]
]);
