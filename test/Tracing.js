const isNode = util.isNode;
const fibonacci = util.fibonacci;
const uuid = util.uuid;
const randomId = util.randomId;
const noop = util.noop;

it('basic', function(done) {
    const tracing = new Tracing({
        processName: 'Licia',
        threadName: 'Tracing'
    });
    tracing.start();

    const traceId = tracing.asyncBegin('async', 'timeout 20');
    setTimeout(function() {
        tracing.asyncEnd(traceId);

        if (isNode) {
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
        }
        done();
    }, 20);

    tracing.instant('instant', 'startDurationTest', 'p');

    tracing.begin('basic', 'fibonacci(50)');
    fibonacci(50);
    tracing.end();

    tracing.begin('basic', 'randomId 100 times');
    for (let i = 0; i < 100; i++) {
        tracing.begin('basic', 'randomId ' + i);
        randomId();
        tracing.end();
    }
    tracing.end();

    tracing.instant('instant', 'finishTest', 'g');

    expect(() => tracing.end()).to.throw();
    expect(() => tracing.asyncEnd()).to.throw();
});

it('category', function() {
    const tracing = new Tracing();
    tracing.start('target');
    tracing.begin('target', 'uuid 1000 times');
    for (let i = 0; i < 1000; i++) {
        uuid();
    }
    tracing.end();
    tracing.begin('ignore', 'do nothing');
    tracing.end();
    expect(tracing.stop().length).to.equal(3);
});

it('not start', function() {
    const tracing = new Tracing();
    tracing.metadata('process_name', {
        name: 'Licia'
    });
    tracing.begin('pause', 'do nothing');
    tracing.end();
    const traceId = tracing.asyncBegin('pause', 'do nothing');
    tracing.asyncEnd(traceId);
    tracing.instant('pause', 'do nothing');
    expect(() => tracing.stop()).to.throw();
});
