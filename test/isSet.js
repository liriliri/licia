tests([
    [new Set(), true],
    [new WeakSet(), false],
    [{}, false]
]);
