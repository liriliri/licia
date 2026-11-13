expect(
    parseArgs(['eustia', '--output', 'util' + '.js', '-w', '--help', 'true'], {
        names: {
            output: 'string',
            watch: 'boolean',
            help: 'boolean'
        },
        shorthands: {
            output: 'o',
            watch: 'w'
        }
    })
).to.eql({
    remain: ['eustia'],
    output: 'util' + '.js',
    watch: true,
    help: true
});

const options = {
    names: {
        watch: 'boolean',
        help: 'boolean',
        output: 'string'
    },
    shorthands: {
        help: 'h'
    }
};

tests([
    [
        ['eustia', '--watch', '--help'],
        options,
        { remain: ['eustia'], watch: true, help: true }
    ],
    [
        ['eustia', '--watch', '-h'],
        options,
        { remain: ['eustia'], watch: true, help: true }
    ],
    [
        ['eustia', '--watch', '--output', 'bundle.js'],
        options,
        { remain: ['eustia'], watch: true, output: 'bundle.js' }
    ],
    [
        ['eustia', '--watch', '--unknown'],
        options,
        { remain: ['eustia', '--unknown'], watch: true }
    ],
    [
        ['eustia', '--watch', 'false', '--help'],
        options,
        { remain: ['eustia'], watch: false, help: true }
    ]
]);
