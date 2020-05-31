const { parseArgs, lowerCase, fs, format, kill } = require('licia');
const { cpFile, mkdir } = require('./util');
const cp = require('child_process');

const options = parseArgs(process.argv.slice(2), {});

const remain = options.remain;

const cmd = remain[0];
const modName = remain[1];
const scriptPath =
    'src/' + lowerCase(modName[0]) + '/' + modName + '.server.js';
const targetScriptPath = '.licia/server/' + modName + '.server.js';

const pidDataPath = '.licia/server/pid.json';

let pidData = {};

async function readPid() {
    const data = await fs.readFile(pidDataPath, 'utf8');
    pidData = JSON.parse(data);
    return pidData[modName];
}

async function savePidData() {
    await fs.writeFile(pidDataPath, JSON.stringify(pidData, null, 2), 'utf8');
}

async function storePid(pid) {
    pidData[modName] = pid;
    await savePidData();
}

async function delPid(pid) {
    delete pidData[modName];
    await savePidData();
}

async function main() {
    await mkdir('server');
    if (!(await fs.exists(pidDataPath))) {
        await fs.writeFile(pidDataPath, '{}', 'utf8');
    }

    let pid = await readPid();
    const running = await isRunning(pid);

    function stop() {
        if (running) {
            kill(pid);
            delPid(pid);
        }
    }

    await cpFile(scriptPath, targetScriptPath);

    if (cmd === 'start') {
        stop();
        const subProcess = cp.spawn('node', [targetScriptPath], {
            detached: true,
            stdio: 'ignore'
        });
        storePid(subProcess.pid);
        subProcess.unref();
    } else if (cmd === 'stop') {
        stop();
    }
}

function isRunning(pid) {
    return new Promise(resolve => {
        cp.exec(
            format(
                process.platform === 'win32'
                    ? 'tasklist /fi "PID eq %s" | findstr /i "node.exe"'
                    : 'ps -f -p %s | grep "node"',
                pid
            ),
            function(err, stdout) {
                resolve(!err && !!stdout.toString().trim());
            }
        );
    });
}

main();
