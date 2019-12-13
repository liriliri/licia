test([
    [{}, 'object'],
    [[], 'array'],
    [[], false, 'Array'],
    [5, 'number'],
    [null, 'null'],
    [function() {}, 'function'],
    [async function() {}, false, 'AsyncFunction'],
    [undefined, 'undefined'],
    [+'a', 'nan']
]);
