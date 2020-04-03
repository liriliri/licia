tests([
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

if (util.isNode) {
    test([Buffer.from([]), 'buffer']);
}
