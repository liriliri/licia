tests([
    ['ORA ORA ORA ORA ORA ORA', 12, 'ORA ORA O...'],
    [
        'ORA ORA ORA ORA ORA ORA',
        10,
        {
            separator: ' ',
            ellipsis: '……'
        },
        'ORA ORA……'
    ],
    [
        'ORA ORA ORA ORA ORA ORA',
        12,
        {
            separator: 'B'
        },
        'ORA ORA O...'
    ],
    [
        'ORA ORA ORA ORA ORA ORA',
        12,
        {
            separator: 'R'
        },
        'ORA ORA O...'
    ],
    ['ORA ORA ORA ORA ORA ORA', 30, 'ORA ORA ORA ORA ORA ORA'],
    ['ORA ORA ORA ORA ORA ORA', 2, '...']
]);
