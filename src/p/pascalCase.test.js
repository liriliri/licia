test([
    ['foo', 'Foo'],
    ['FooBar', 'FooBar'],
    ['foo--bar', 'FooBar'],
    ['__foo__bar__', 'FooBar'],
    ['foo bar', 'FooBar'],
    ['foo.bar', 'FooBar'],
    ['fooBar', 'FooBar']
]);
