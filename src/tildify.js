/* Convert absolute path to tilde path.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |path  |Path to convert|
 * |return|Tilde path     |
 */

/* example
 * tildify('/home/surunzi/dev'); // -> '~/dev'
 */

/* module
 * env: node
 * since: 1.40.0
 */

/* typescript
 * export declare function tildify(path: string): string;
 */

_('startWith');

const path = require('path');
const os = require('os');

const homeDir = os.homedir();

exports = function(p) {
    p = path.normalize(p) + path.sep;
    if (startWith(p, homeDir)) {
        p = p.replace(homeDir + path.sep, `~${path.sep}`);
    }

    return p.slice(0, -1);
};
