suite.add('eval', function () 
{
    eval('for (var i = 0; i < 100000; i++);');
}).add('function', function () 
{
    (function () {for (var i = 0; i < 100000; i++);})();
}).add('eris', function () 
{
    evalJs('for (var i = 0; i < 100000; i++);');
}).run();