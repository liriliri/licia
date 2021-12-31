const isNode = util.isNode;
const fibonacci = util.fibonacci;
const uuid = util.uuid;
const randomId = util.randomId;
const noop = util.noop;

const tracing = new Tracing({
    processName: 'Licia',
    threadName: 'Tracing'
});
tracing.start();

if (isNode) {
    after(async function() {
        const path = require('path');
        const fs = require('fs');
        const outputPath = path.resolve(
            process.cwd(),
            '.licia/test/Tracing.json'
        );
        fs.writeFile(
            outputPath,
            JSON.stringify({
                traceEvents: tracing.stop()
            }),
            'utf8',
            noop
        );
    });
}

it('basic', function(done) {
    const traceId = tracing.beginWithId('async', 'timeout 20');
    setTimeout(function() {
        tracing.endWithId(traceId);
        done();
    }, 20);

    tracing.instant('instant', 'startDurationTest', 'p');

    tracing.begin('basic', 'fibonacci(50)');
    fibonacci(50);
    tracing.end();

    tracing.begin('basic', 'uuid 1000 times');
    for (let i = 0; i < 1000; i++) {
        uuid();
    }
    tracing.end();

    tracing.begin('basic', 'randomId 100 times');
    for (let i = 0; i < 100; i++) {
        tracing.begin('basic', 'randomId ' + i);
        randomId();
        tracing.end();
    }
    tracing.end();

    tracing.instant('instant', 'finishTest', 'g');
});
