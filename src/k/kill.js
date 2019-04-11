/* Kill process.
 *
 * |Name|Type|Desc|
 * |----|----|----|
 * |pid |number|Process ID|
 */

/* example
 * kill(9420);
 */

/* module
 * env: node
 * test: node
 */

/* typescript
 * export declare function kill(pid: number): void;
 */

_('isWindows');

const childProcess = require('child_process');

exports = function(pid) {
    try {
        let cmd = '';
        if (isWindows) {
            cmd = `taskkill /pid ${pid} /T /F`;
        } else {
            cmd = `kill ${pid} -9`;
        }
        childProcess.execSync(cmd);
    } catch (e) {
        // eslint-disable no-empty
    }
};
