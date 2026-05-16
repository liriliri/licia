this.timeout(5000);
it('basic', done => {
    const childProcess = require('child_process');

    const code = 'setInterval(() => {}, 1000 * 1000);';
    const subProcess = childProcess.spawn('node', ['-e', code], {
        detached: true
    });

    subProcess.on('exit', () => done());

    kill(subProcess.pid);
});

it('only accepts numeric pids', () => {
    const childProcess = require('child_process');
    const originalProcessKill = process.kill;
    const originalSpawnSync = childProcess.spawnSync;
    let called = false;

    try {
        if (process.platform === 'win32') {
            childProcess.spawnSync = (cmd, args) => {
                called = true;
                expect(cmd).to.equal('taskkill');
                expect(args).to.eql(['/pid', '123', '/T', '/F']);
                return {};
            };
        } else {
            process.kill = pid => {
                called = true;
                expect(pid).to.equal(123);
                return true;
            };
        }

        kill('123');
        expect(called).to.be.true;

        called = false;
        kill('123; touch VULNERABLE_MARKER');
        expect(called).to.be.false;
    } finally {
        process.kill = originalProcessKill;
        childProcess.spawnSync = originalSpawnSync;
    }
});
