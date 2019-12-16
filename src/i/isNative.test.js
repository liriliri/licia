tests([
    [function() {}, false],
    [isNative, false],
    [Math.min, true],
    [Date.now, true]
]);
