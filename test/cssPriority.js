it('basic', function() {
    tests([
        [
            'a.button > i.icon:before',
            {
                important: true,
                inlineStyle: false,
                position: 100
            },
            [1, 0, 0, 2, 3, 100]
        ],
        [
            'a',
            {
                inlineStyle: true
            },
            [0, 1, 0, 0, 1, 0]
        ],
        ['*', [0, 0, 0, 0, 0, 0]],
        ['li', [0, 0, 0, 0, 1, 0]],
        ['li:first-line', [0, 0, 0, 0, 2, 0]],
        ['ul li', [0, 0, 0, 0, 2, 0]],
        ['ul ol + li', [0, 0, 0, 0, 3, 0]],
        ['h1 + *[rel=up]', [0, 0, 0, 1, 1, 0]],
        ['ul ol li.red', [0, 0, 0, 1, 3, 0]],
        ['li.red.level', [0, 0, 0, 2, 1, 0]],
        ['#id', [0, 0, 1, 0, 0, 0]],
        ['body > h1', [0, 0, 0, 0, 2, 0]],
        ['button.button > i.icon', [0, 0, 0, 2, 2, 0]],
        ['button.button > i.icon:hover', [0, 0, 0, 3, 2, 0]],
        ['button.button > i.icon:before', [0, 0, 0, 2, 3, 0]],
        ['input[type="text"]:focus', [0, 0, 0, 2, 1, 0]]
    ]);
});

it('compare', function() {
    tests(
        function(a, b) {
            return cssPriority.compare(a, b);
        },
        [
            [[0, 1, 0, 0, 0, 0], [0, 0, 1, 2, 12, 1], 1],
            [[0, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0], -1],
            [[0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], 0]
        ]
    );
});
