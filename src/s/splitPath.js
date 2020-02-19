/* Split path into dir, name and ext.
 *
 * |Name  |Desc                               |
 * |------|-----------------------------------|
 * |path  |Path to split                      |
 * |return|Object containing dir, name and ext|
 */

/* example
 * splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
 * splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function splitPath(path: string): {
 *     dir: string;
 *     name: string;
 *     ext: string;
 * };
 */

exports = function(path) {
    const match = path.match(regSplit);

    return {
        dir: match[1],
        name: match[2],
        ext: match[3]
    };
};

const regSplit = /^([\s\S]*?)((?:\.{1,2}|[^\\/]+?|)(\.[^./\\]*|))(?:[\\/]*)$/;
