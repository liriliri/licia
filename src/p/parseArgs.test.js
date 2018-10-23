it('basic', function() {
    expect(
        parseArgs(
            ['eustia', '--output', 'util' + '.js', '-w', '--help', 'true'],
            {
                names: {
                    output: 'string',
                    watch: 'boolean',
                    help: 'boolean'
                },
                shorthands: {
                    output: 'o',
                    watch: 'w'
                }
            }
        )
    ).to.eql({
        remain: ['eustia'],
        output: 'util' + '.js',
        watch: true,
        help: true
    });
});
