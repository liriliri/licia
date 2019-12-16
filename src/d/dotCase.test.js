tests([
    ['foo', 'foo'],
    ['foo--bar', 'foo.bar'],
    ['__foo__bar__', 'foo.bar'],
    ['foo bar', 'foo.bar'],
    ['fooBar', 'foo.bar']
]);
