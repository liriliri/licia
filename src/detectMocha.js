/* Detect if mocha is running.
 */

/* example
 * detectMocha(); // -> True if mocha is running.
 */

/* module
 * env: all
 */

/* typescript
 * export declare function detectMocha(): boolean;
 */

_('root');

exports = function() {
    for (let i = 0, len = methods.length; i < len; i++) {
        const method = methods[i];

        if (typeof root[method] !== 'function') return false;
    }

    return true;
};

const methods = [
    'afterEach',
    'after',
    'beforeEach',
    'before',
    'describe',
    'it'
];
