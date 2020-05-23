const path = require('path');
const { fs, toArr, trim, each } = require('licia');

const {
    mkdir,
    fileExist,
    readTpl,
    eustiaBuild,
    runScript,
    extractComment
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

    const scripts = extractComment(data, 'scripts');
    if (scripts) {
        const lines = trim(scripts).split('\n');
        let before = '';
        each(lines, function(line) {
            const splitterPos = line.indexOf(':');
            const name = trim(line.slice(0, splitterPos));
            const val = trim(line.slice(splitterPos + 1));
            if (name === 'before') {
                before = val;
            }
        });
        if (before) {
            await runScript(before);
        }
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
