test([
    [
        ['', 'firstName', 'lastName'],
        ['daughter', 'Emily', 'Smith'],
        ['father', 'John', 'Smith'],
        ['mother', 'Jane', 'Smith']
    ],
    util.stripIndent`
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
