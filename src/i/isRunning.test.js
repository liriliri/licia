const cp = require('child_process');

const child = cp.spawn(
    'node',
    ['-e', 'setInterval(() => console.log("running"), 1000)'],
    {
        detached: true,
        stdio: 'ignore'
    }
);

expect(isRunning(child.pid)).to.be.true;
util.kill(child.pid);
expect(isRunning(child.pid)).to.be.false;
