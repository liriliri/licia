const origin = 'http://example.com/a.html';

tests([
    [origin, 'http://example.com/b.html', true],
    [origin, 'http://licia.liriliri.io', false],
    [origin, 'https://example.com/b.html', false],
    [origin, 'http://example.com:8080', false],
    [origin, 'http://example.com:80', true]
]);
