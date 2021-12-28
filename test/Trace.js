const zlib = require('zlib');
const path = require('path');

const fs = util.fs;
const promisify = util.promisify;
const each = util.each;
const contain = util.contain;
const gunzip = promisify(zlib.gunzip);

const samplePath = path.resolve(process.cwd(), 'test/Trace.gz');

let data, trace;

before(async function() {
    data = await fs.readFile(samplePath);
    data = await gunzip(data);
    data = data.toString('utf8');
    data = JSON.parse(data);
    trace = new Trace(data.traceEvents);
});

it('basic', function() {
    expect(trace.processes().length).to.equal(16);
    each(trace.processes(), process => {
        if (process.name() === 'Renderer') {
            trace.rmProcess(process.id());
        }
    });
    expect(trace.processes().length).to.equal(8);
    const browserProcess = trace.getProcess(627);
    expect(browserProcess.threads().length).to.equal(4);
    each(browserProcess.threads(), thread => {
        if (contain(thread.name(), 'ThreadPool')) {
            browserProcess.rmThread(thread.id());
        }
    });
    expect(browserProcess.threads().length).to.equal(2);
});
