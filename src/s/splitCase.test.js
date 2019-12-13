test(input => splitCase(input).length)([
    ['foo', 1],
    ['foo-bar', 2],
    ['foo--bar', 2],
    ['__foo__bar__', 2],
    ['foo bar', 2],
    ['foo.bar', 2],
    ['fooBar', 2]
]);
