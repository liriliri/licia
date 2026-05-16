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

_('isWindows isInt toNum');

const childProcess = require('child_process');

exports = function(pid) {
    try {
        pid = toNum(pid);
        if (!isInt(pid) || pid <= 0) {
            throw new TypeError('Invalid pid');
        }

        if (isWindows) {
            childProcess.spawnSync(
                'taskkill',
                ['/pid', String(pid), '/T', '/F'],
                {
                    stdio: 'ignore'
                }
            );
        } else {
            process.kill(pid, 'SIGKILL');
        }
    } catch (e) {
        /* eslint-disable no-empty */
    }
};
