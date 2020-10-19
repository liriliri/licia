suite
    .add('eval', function() {
        eval('for (var i = 0; i < 100000; i++);');
    })
    .add('function', function() {
        (function() {
            for (let i = 0; i < 100000; i++);
        })();
    })
    .add('licia', function() {
        evalJs('for (var i = 0; i < 100000; i++);');
    })
    .run();
