tests([
    [new ArrayBuffer(8), true],
    [[], false],
    [new Int16Array(), false],
    [null, false]
]);
