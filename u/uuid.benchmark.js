var nodeUuid = require('uuid/v4');

suite.add('node uuid', function () 
{
    nodeUuid();
}).add('eris', function () 
{
    uuid();
}).run();