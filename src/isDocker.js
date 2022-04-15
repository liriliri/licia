/* Check if the process is running inside a docker container.
 */

/* example
 * console.log(isDocker()); // -> true if running inside a docker container.
 */

/* module
 * env: node
 * since: 1.35.0
 */

/* typescript
 * export declare function isDocker(): boolean;
 */

_('memoize contain');

const fs = require('fs');

exports = memoize(function() {
    try {
        fs.statSync('/.dockerenv');
        return true;
    } catch (e) {
        /* eslint-disable no-empty */
    }

    return hasDocker('/proc/self/cgroup') || hasDocker('/proc/self/mountinfo');
});

function hasDocker(file) {
    try {
        return contain(fs.readFileSync(file, 'utf8'), 'docker');
    } catch (e) {
        return false;
    }
}
