benchmark({
    eval() {
        eval('for (var i = 0; i < 100000; i++);');
    },
    function() {
        (function() {
            for (let i = 0; i < 100000; i++);
        })();
    },
    licia() {
        evalJs('for (var i = 0; i < 100000; i++);');
    }
});
