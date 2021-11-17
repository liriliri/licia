/* scripts
 * before: npm i --prefix .licia gulp
 */
const path = require('path');
const delRequireCache = util.delRequireCache;

benchmark({
    require() {
        require('gulp');
        delRequireCache('gulp');
    }
}).then(() => {
    cacheRequire({
        dir: path.resolve(__dirname, 'requireCache'),
        code: true
    });
    benchmark({
        cacheRequire() {
            require('gulp');
            delRequireCache('gulp');
        }
    });
});
