tests([
    [
        'const a = 5;',
        'js',
        { keyword: 'color:#569cd6;' },
        '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
    ],
    [
        '<script>const a = 5;</script>',
        'html',
        {
            keyword: '',
            number: '',
            operator: '',
        },
        '<span class="keyword">&lt;script&gt;</span><span class="keyword">const</span> a <span class="operator">=</span> <span class="number">5</span>;<span class="keyword">&lt;/script&gt;</span>'
    ]
]);
