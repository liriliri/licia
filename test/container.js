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

function burnCpu() {
    /* eslint-disable no-unused-vars */
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum++;
    }
}
