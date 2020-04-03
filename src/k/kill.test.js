it('basic', done => {
    const childProcess = require('child_process');

    const code = 'setInterval(() => {}, 1000 * 1000);';
    const subProcess = childProcess.spawn('node', ['-e', code], {
        detached: true
    });

    subProcess.on('exit', () => done());

    kill(subProcess.pid);
}, 5000);
