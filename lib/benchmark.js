const path = require('path');
const { fs, toArr, trim } = require('licia');

const { mkdir, fileExist, readTpl, eustiaBuild, runScript } = require('./util');

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
    await fs.writeFile(
        benchmarkOutputPath,
        tpl({
            modName,
            data: trim(data)
        })
    );

    await eustiaBuild({
        files: modBenchmarkPath,
        output: '.licia/benchmark/' + modName + '.util.js',
        library: '$_abcdefghijklmnopqrstuvwxyz'
            .split('')
            .map(val => 'src/' + val),
        include: modName,
        namespace: 'util',
        format: 'commonjs'
    });
    await runScript('node', ['.licia/benchmark/' + modName]);
}

function resolvePath() {
    let args = toArr(arguments);

    args.unshift(process.cwd());

    return path.resolve.apply(path, args);
}
