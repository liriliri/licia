const cp = require('child_process');

const child = cp.spawn('node', [
    '-e',
    'setInterval(() => console.log("running"), 1000)'
]);

expect(isRunning(child.pid)).to.be.true;
child.kill();
expect(isRunning(1234567890)).to.be.false;
