/* scripts
 * before: npm i --prefix .licia trim
 */

const npmTrim = require('trim');

const bigStr = util.range(100000).join(' ');

const useVanilla = false;

if (!useVanilla) {
    delete String.prototype.trim;
    delete String.prototype.trimLeft;
    delete String.prototype.trimRight;
}

const benches = {
    npmTrim() {
        npmTrim(bigStr);
    },
    licia() {
        trim(bigStr);
    }
};

if (useVanilla) {
    benches.vanilla = function() {
        bigStr.trim();
    };
}

benchmark(benches);
