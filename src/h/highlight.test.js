tests([
    [
        'const a = 5;',
        'js',
        { keyword: 'color:#569cd6;' },
        '<span style="color:#569cd6;">const</span> a <span style="color:#994500;">=</span> <span style="color:#0086b3;">5</span>;'
    ],
    [
        '<script>const a = 5;</script>',
        'html',
        {
            keyword: 'color:#569cd6;'
        },
        '<span style="color:#569cd6;">&lt;script&gt;</span><span style="color:#569cd6;">const</span> a <span style="color:#994500;">=</span> <span style="color:#0086b3;">5</span>;<span style="color:#569cd6;">&lt;/script&gt;</span>'
    ]
]);
