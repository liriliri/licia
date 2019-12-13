test([
    ['foo', 'foo'],
    ['FooBar', 'fooBar'],
    ['foo-bar', 'fooBar'],
    ['foo--bar', 'fooBar'],
    ['__foo__bar__', 'fooBar'],
    ['foo bar', 'fooBar'],
    ['foo.bar', 'fooBar']
]);
