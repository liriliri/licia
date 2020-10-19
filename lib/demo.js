const { each, fs } = require('licia');
const comTranspiler = require('eustia-component');

const {
    mkdir,
    fileExist,
    readTpl,
    eustiaBuild,
    resolvePath
} = require('./util');

const modData = require('../index.json');

const demoData = [];

each(modData, function(val, key) {
    if (val.demo) demoData.push(key);
});

module.exports = async function() {
    await mkdir('demo');
    const modName = options.remain[0];
    if (!modName) {
        await runAllDemo();
    } else {
        await runDemo(modName);
    }
};

async function runAllDemo() {
    for (const modName of demoData) {
        await runDemo(modName);
    }

    console.log('All done!');
}

async function runDemo(modName) {
    const modPath = resolvePath(
        'src',
        modName[0].toLowerCase(),
        modName + '.js'
    );
    const modTestPath = resolvePath('demo', modName + '.demo.html');
    const demoOutputPath = resolvePath('.licia/demo/' + modName + '.html');

    await fileExist(modPath);
    await fileExist(modTestPath);
    const tpl = await readTpl('demo');
    await fs.writeFile(demoOutputPath, tpl({ modName }), 'utf8');
    await genTestUtil(modName + '.demo', {
        extension: ['js', 'html']
    });

    console.log('Navigate "' + demoOutputPath + '" to view the page:)');
}

async function genTestUtil(modName, { extension = ['js'] } = {}) {
    const outputDir = '.licia/demo';
    const format = 'global';

    let output = outputDir + '/' + modName + '.js';
    output = output.replace('.demo.js', '.js');

    const library = '$_abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(val => 'src/' + val);

    library.push('demo');

    const buildOpts = {
        files: [],
        output,
        extension,
        library,
        include: modName,
        format: format,
        namespace: 'util',
        sourcemap: true,
        transpiler: [
            {
                test: /\.html$/,
                handler: comTranspiler()
            }
        ]
    };

    await eustiaBuild(buildOpts);

    let data = await fs.readFile(output, 'utf8');
    data = data.replace(/LICIA_TEST/g, 'true');
    await fs.writeFile(output, data, 'utf8');
}
