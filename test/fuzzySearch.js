expect(fuzzySearch('lic', ['licia', 'll', 'lic'])).to.eql(['lic', 'licia']);
expect(
    fuzzySearch(
        'alpha-test',
        [
            {
                name: 'alpha-test-1'
            },
            {
                name: 'beta-test'
            }
        ],
        {
            key: 'name'
        }
    )
).to.eql([{ name: 'alpha-test-1' }]);
expect(fuzzySearch('Li', ['Licia', 'li'])).to.eql(['li', 'Licia']);
expect(
    fuzzySearch('Li', ['Licia', 'li'], {
        caseSensitive: true
    })
).to.eql(['Licia']);
