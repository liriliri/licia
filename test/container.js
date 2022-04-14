it('basic', async () => {
    console.log('cpu number', container.cpuNum());
    console.log(
        'cpu usage',
        `${((await container.cpuUsage()) * 100).toFixed(2)}%`
    );
});
