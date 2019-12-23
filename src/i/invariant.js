/* Facebook's invariant.
 *
 * [Related docs](https://github.com/zertosh/invariant)
 */

/* example
 * invariant(true, 'This will not throw');
 * // No errors
 * invariant(false, 'This will throw an error with this message');
 * // Error: Invariant Violation: This will throw an error with this message
 */

/* module
 * env: all
 */

/* typescript
 * export declare function invariant(
 *     condition: boolean,
 *     format?: string,
 *     a?: string,
 *     b?: string,
 *     c?: string,
 *     d?: string,
 *     e?: string,
 *     f?: string
 * ): void;
 */

_('root');

exports = function(condition, format, a, b, c, d, e, f) {
    const process = root.process || { env: { NODE_ENV: 'development' } };

    if (process.env.NODE_ENV !== 'production') {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }

    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                    'for the full error message and additional helpful warnings.'
            );
        } else {
            const args = [a, b, c, d, e, f];
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, () => args[argIndex++]));
            error.name = 'Invariant Violation';
        }

        error.framesToPop = 1;
        throw error;
    }
};
