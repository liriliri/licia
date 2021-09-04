const { fs, trim } = require('licia');
const { resolvePath } = require('./util');

const {
    mkdir,
    fileExist,
    readTpl,
    eustiaBuild,
    runScripts,
    runScript,
    extractScripts
} = require('./util');

module.exports = async function() {
    await mkdir('benchmark');
    const modName = options.remain[0];
    if (!modName) return console.log('A module name must be given.');

    await run(modName);
};

async function run(modName) {
    const modPath = resolvePath('src', modName + '.js');
    const modBenchmarkPath = resolvePath('benchmark', modName + '.js');
    const benchmarkOutputPath = resolvePath(
        '.licia/benchmark/' + modName + '.js'
    );

    await fileExist(modPath);
    await fileExist(modBenchmarkPath);
    const tpl = await readTpl('benchmark');
    const data = await fs.readFile(modBenchmarkPath, 'utf8');

    const scripts = extractScripts(data);
    if (scripts.before) {
        await runScripts(scripts.before);
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
        files: [modBenchmarkPath, resolvePath('lib/tpl/benchmark.tpl')],
        output,
        library: 'src',
        include: modName,
        namespace: 'util',
        format: 'commonjs'
    });
    let data = await fs.readFile(output, 'utf8');
    data = data.replace(/LICIA_TEST/g, 'true');
    await fs.writeFile(output, data, 'utf8');
}
