tests([
    [' abc  ', 'abc'],
    ['_abc_', '_', 'abc'],
    ['_abc_', ['a', 'c', '_'], 'b'],
    ['_abc_', 'ac_', 'b']
]);
