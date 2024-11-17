const stripIndent = util.stripIndent;

const data = [
    ['', 'firstName', 'lastName'],
    ['daughter', 'Emily', 'Smith'],
    ['father', 'John', 'Smith'],
    ['mother', 'Jane', 'Smith']
];

it('stringify', () => {
    test([
        data,
        stripIndent`
            ┌──────────┬───────────┬──────────┐
            │          │ firstName │ lastName │
            ├──────────┼───────────┼──────────┤
            │ daughter │ Emily     │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ father   │ John      │ Smith    │
            ├──────────┼───────────┼──────────┤
            │ mother   │ Jane      │ Smith    │
            └──────────┴───────────┴──────────┘
        `
    ]);
});

it('custom table borders', () => {
    test([
        data,
        {
            border: {
                topJoin: '─',
                bodyJoin: ' ',
                joinJoin: '─',
                bottomJoin: '─'
            }
        },
        stripIndent`
            ┌─────────────────────────────────┐
            │            firstName   lastName │
            ├─────────────────────────────────┤
            │ daughter   Emily       Smith    │
            ├─────────────────────────────────┤
            │ father     John        Smith    │
            ├─────────────────────────────────┤
            │ mother     Jane        Smith    │
            └─────────────────────────────────┘
        `
    ]);
});
