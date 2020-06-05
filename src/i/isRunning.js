/* Check if process is running.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |pid   |Process id                |
 * |return|True if process is running|
 */

/* example
 * isRunning(123456); // true if running
 */

/* module
 * env: node
 * since: 1.22.0
 */

/* typescript
 * export declare function isRunning(pid: number): boolean;
 */

exports = function(pid) {
    try {
        return process.kill(pid, 0);
    } catch (e) {
        return e.code === 'EPERM';
    }
};
