/* Kill process.
 *
 * |Name|Desc|
 * |----|----|
 * |pid |Process ID|
 */

/* example
 * kill(9420);
 */

/* module
 * env: node
 * since: 1.4.4
 */

/* typescript
 * export declare function kill(pid: number): void;
 */

_('isWindows');

const childProcess = require('child_process');

exports = function(pid) {
    try {
        if (isWindows) {
            childProcess.spawnSync('taskkill', ['/pid', pid, '/T', '/F'], {
                stdio: 'ignore'
            });
        } else {
            process.kill(pid, 'SIGKILL');
        }
    } catch (e) {
        /* eslint-disable no-empty */
    }
};
