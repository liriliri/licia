test([
    [
        ['a', 'b', 'c'],
        {
            a: true,
            b: true,
            c: true
        }
    ],
    [
        ['a', 'b', 'c'],
        1,
        {
            a: 1,
            b: 1,
            c: 1
        }
    ],
    [
        ['a', 'b', 'c'],
        function(key) {
            return key;
        },
        {
            a: 'a',
            b: 'b',
            c: 'c'
        }
    ]
]);
