tests([
    [function*() {}, false],
    [function() {}, false],
    [async function () {}, true]
]);
