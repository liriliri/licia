/* eslint-disable no-unused-vars */
it('basic', function() {
    tests([
        [function(a, b) {}, ['a', 'b']],
        [function() {}, []],
        [function(/* comments */ a, b) {}, ['a', 'b']],
        ['function(a, b) {}', ['a', 'b']]
    ]);
});

it('async', function() {
    test([async function(a, b) {}, ['a', 'b']]);
});

it('arrow function', function() {
    tests([
        [(a, b) => {}, ['a', 'b']],
        [() => {}, []],
        [a => {}, ['a']]
    ]);
});
