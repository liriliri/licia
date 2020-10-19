/* scripts
 * before: npm i --prefix .licia uuid
 */

const nodeUuid = require('uuid').v4;

suite
    .add('node uuid', function() {
        nodeUuid();
    })
    .add('licia', function() {
        uuid();
    })
    .run();
