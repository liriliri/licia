/* scripts
 * before: npm i uuid --no-save
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
