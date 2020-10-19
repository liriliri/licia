tests([
    ['foo', 'foo'],
    ['foo_bar', 'foo_bar'],
    ['foo--bar', 'foo_bar'],
    ['__foo__bar__', 'foo_bar'],
    ['foo bar', 'foo_bar'],
    ['foo.bar', 'foo_bar'],
    ['fooBar', 'foo_bar']
]);
