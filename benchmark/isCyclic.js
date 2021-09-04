/* scripts
 * before: npm i --prefix .licia is-circular
 */

const obj = {
    a: {
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 }
    },
    b: {
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 }
    },
    c: {
        a: { a: 1, b: 2, c: 3 },
        b: { a: 1, b: 2, c: 3 },
        c: { a: 1, b: 2, c: 3 }
    }
};

const isCircular = require('is-circular');

benchmark({
    'is-circular': function() {
        isCircular(obj);
    },
    licia() {
        isCyclic(obj);
    }
});
