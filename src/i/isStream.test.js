const stream = require('stream');

tests([
    [new stream.Stream(), true],
    [new stream.Readable(), true],
    [new stream.Writable(), true],
    [new stream.Duplex(), true],
    [new stream.Transform(), true],
    [new stream.PassThrough(), true],
    [{}, false],
    [function() {}, false]
]);
