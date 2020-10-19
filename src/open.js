/* Open stuff like url, files.
 *
 * |Name  |Desc         |
 * |------|-------------|
 * |target|Stuff to open|
 * |return|Child process|
 */

/* example
 * open('https://eustia.liriliri.io/');
 */

/* module
 * env: node
 * test: manual
 * since: 1.2.0
 */

/* typescript
 * export declare function open(target: string): any;
 */

_('isWindows');

const childProcess = require('child_process');

exports = function(target) {
    let cmd;
    const args = [];

    if (isWindows) {
        cmd = 'cmd';
        args.push('/c', 'start', '""', '/b');
    } else {
        cmd = 'open';
    }

    args.push(target);

    const cp = childProcess.spawn(cmd, args);
    cp.unref();

    return cp;
};
