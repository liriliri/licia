tests([
    [new Set(), false],
    [new WeakSet(), true],
    [{}, false]
]);
