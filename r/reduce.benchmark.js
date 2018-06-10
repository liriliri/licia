var underscore = require('underscore');

var arr = [1, 2, 3];

function sum(sum, n) {
    return sum + n;
}

suite
    .add('underscore', function() {
        underscore.reduce(arr, sum);
    })
    .add('licia', function() {
        reduce(arr, sum);
    })
    .run();
