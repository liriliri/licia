tests([
    ['test', 8, '  test'],
    ['test\nlines', 8, '  test\n lines'],
    [['test', 'lines'], 8, '  test\n lines']
]);
