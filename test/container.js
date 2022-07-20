const fileSize = util.fileSize;
const randomBytes = util.randomBytes;

it('basic', () => {
    console.log('cpu number', container.cpuNum());
});

it('cpuUsage', done => {
    container.cpuUsage().then(cpuUsage => {
        console.log('cpu usage', `${(cpuUsage * 100).toFixed(2)}%`);
        done();
    });
    burnCpu();
});

it('cpuLoad', done => {
    container.cpuLoad().then(cpuLoad => {
        console.log('cpu load', `${(cpuLoad * 100).toFixed(2)}%`);
        done();
    });
    burnCpu();
});

it('memory', () => {
    const memUsage = container.memUsage();
    console.log('memory usage', fileSize(memUsage));
    console.log('memory load', container.memLoad());
    expect(memUsage).to.be.a('number');
    burnMem();
    const newMemUsage = container.memUsage();
    console.log(
        'memory usage after adding 10M',
        fileSize(container.memUsage())
    );
    console.log('memory load after adding 10M', container.memLoad());
    expect(newMemUsage - memUsage).to.be.above(1024 * 1024 * 8);
});

function burnMem() {
    global.buf = randomBytes(1024 * 1024 * 10);
}

function burnCpu() {
    /* eslint-disable no-unused-vars */
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum++;
    }
}
