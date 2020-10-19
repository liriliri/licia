expect(flatten(['a', ['b', ['c']], 'd', ['e']])).to.deep.equal([
    'a',
    'b',
    'c',
    'd',
    'e'
]);
