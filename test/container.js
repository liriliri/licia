it('basic', done => {
    console.log('cpu number', container.cpuNum());
    container.cpuUsage().then(cpuUsage => {
        console.log('cpu usage', `${(cpuUsage * 100).toFixed(2)}%`);
        done();
    });

    /* eslint-disable no-unused-vars */
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum++;
    }
});
