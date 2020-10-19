tests(c => isFullWidth(c.codePointAt(0)), [
    ['a', false],
    [',', false],
    ['我', true],
    ['，', true]
]);
