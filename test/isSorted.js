tests([
    [[1, 2, 3], true],
    [[3, 2, 1], false],
    [
        [3, 2, 1],
        function(a, b) {
            return b - a;
        },
        true
    ]
]);
