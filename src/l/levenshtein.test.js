const each = util.each;

it('basic', () => {
    each(
        [
            ['cat', 'cat', 0],
            ['', 'cat', 3],
            ['t', 'cat', 2],
            ['ct', 'cat', 1],
            ['cat', 'cake', 2],
            ['aboard', 'abroad', 2],
            ['我很好', '我非常好', 2]
        ],
        function(val) {
            expect(levenshtein(val[0], val[1])).to.equal(val[2]);
        }
    );
});
