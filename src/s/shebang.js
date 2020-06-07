/* Get command from a shebang.
 *
 * |Name  |Desc                 |
 * |------|---------------------|
 * |str   |String to get command|
 * |return|Shebang command      |
 */

/* example
 * shebang('#!/usr/bin/env node'); // -> '/usr/bin/env node'
 * shebang('#!/bin/bash'); // -> '/bin/bash'
 * shebang('node'); // -> undefined
 */

/* module
 * env: all
 */

/* typescript
 * export declare function shebang(str: string): string | void;
 */

_('trim');

const regShebang = /^#!(.*)/;

exports = function(str) {
    const match = str.match(regShebang);
    if (!match) return;

    return trim(match[1]);
};
