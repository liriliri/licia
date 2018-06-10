it('basic', function() {
    expect(
        reduce(
            [1, 2, 3],
            function(sum, n) {
                return sum + n;
            },
            0
        )
    ).to.equal(6);
});

it('object', function() {
    expect(
        reduce(
            {
                key: 'value',
                key2: 'value2'
            },
            function(acc, value, key) {
                acc[value] = key;

                return acc;
            },
            {}
        )
    ).to.eql({
        value: 'key',
        value2: 'key2'
    });
});

it('no initial value', function() {
    expect(
        reduce([1, 2, 3], function(sum, n) {
            return sum + n;
        })
    ).to.equal(6);

    expect(
        reduce(
            {
                key: 'value',
                key2: 'value2'
            },
            function(acc, value) {
                return acc + ' ' + value;
            }
        )
    ).to.equal('value value2');
});
