/* scripts
 * before: npm i --prefix .licia uuid
 */

const nodeUuid = require('uuid').v4;

benchmark({
    'node uuid': function() {
        nodeUuid();
    },
    licia() {
        uuid();
    }
});
