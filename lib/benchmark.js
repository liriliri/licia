const path = require('path');
const { fs, toArr, trim } = require('licia');

const {
    mkdir,
    fileExist,
    readTpl,
    eustiaBuild,
    runScript,
    extractScripts
} = require('./util');

module.exports = async function() {
    await mkdir('.licia/benchmark');
    const modName = options.remain[0];
    if (!modName) return console.log('A module name must be given.');

    await run(modName);
};

async function run(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modBenchmarkPath = modPath.replace('.js', '.benchmark.js');
    const benchmarkOutputPath = resolvePath(
        '.licia/benchmark/' + modName + '.js'
    );

    await fileExist(modPath);
    await fileExist(modBenchmarkPath);
    const tpl = await readTpl('benchmark');
    const data = await fs.readFile(modBenchmarkPath, 'utf8');

    const scripts = extractScripts(data);
    if (scripts.before) {
        await runScript(scripts.before);
    }

    await fs.writeFile(
        benchmarkOutputPath,
        tpl({
            modName,
            data: trim(data)
        })
    );

    await genTestUtil(modName, modBenchmarkPath);

    await runScript('node', ['.licia/benchmark/' + modName]);
}

async function genTestUtil(modName, modBenchmarkPath) {
    const output = '.licia/benchmark/' + modName + '.util.js';

    await eustiaBuild({
        files: modBenchmarkPath,
        output,
        library: '$_abcdefghijklmnopqrstuvwxyz'
            .split('')
            .map(val => 'src/' + val),
        include: modName,
        namespace: 'util',
        format: 'commonjs'
    });
    let data = await fs.readFile(output, 'utf8');
    data = data.replace(/LICIA_TEST/g, 'true');
    await fs.writeFile(output, data, 'utf8');
}

function resolvePath() {
    const args = toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
}
