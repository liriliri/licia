const {
    trim,
    fs,
    extractBlockCmts,
    clone,
    keys,
    each,
    last,
    extend,
    map,
    contain,
    sortKeys,
    filter,
    concat,
    unique
} = require('licia');

const {
    outdentOneSpace,
    glob,
    eustiaBuild,
    eustiaDoc,
    extractDependencies,
    extractComment
} = require('./util');

const output = {};

const OUTPUT_PATH = 'index.json';
const OUTPUT_DOC_PATH = 'DOC.md';
const SKILL_DIR = 'skills/licia';
const SKILL_REFERENCES_DIR = SKILL_DIR + '/references';

const regTsIgnore = /^\/\/ @ts-ignore\s*$(?:\r\n?|\n)/gm;

module.exports = async function() {
    await extractInfo();
    await detectDemo();
    await detectBenchmark();

    await writeOutput();
    await updateDoc();
    await updateCSpell();
};

function splitH2(doc) {
    doc = doc.split(/^## /m);
    doc.shift();
    return doc.map(str => {
        str = str.split(/\n/);
        const name = str.shift().trim();
        return {
            name,
            content: trim(str.join('\n'))
        };
    });
}

async function genI18n(doc) {
    const i18n = {};

    for (let i = 0, len = doc.length; i < len; i++) {
        const name = doc[i].name;
        const i18nPath = 'i18n/' + name + '.md';
        if (await fs.exists(i18nPath)) {
            let doc = await fs.readFile(i18nPath, 'utf8');
            const code = await fs.readFile('src/' + name + '.js', 'utf8');
            let example = extractComment(code, 'example');
            example = example.replace(regTsIgnore, '');
            doc = splitH2(doc);
            doc.forEach(locale => {
                i18n[locale.name] = i18n[locale.name] || {};
                i18n[locale.name][name] = locale.content;
                if (example) {
                    i18n[locale.name][name] +=
                        '\n\n' + '```javascript\n' + example + '\n```';
                }
            });
        }
    }

    const locales = ['CN'];

    for (let i = 0, len = locales.length; i < len; i++) {
        const locale = locales[i];
        let output = doc.map(mod => {
            mod = clone(mod);
            if (i18n[locale] && i18n[locale][mod.name]) {
                mod.content = i18n[locale][mod.name];
            }
            return '## ' + mod.name + '\n\n' + mod.content;
        });
        output = output.join('\n\n');
        let summary = '';
        switch (locale) {
            case 'CN':
                summary = '类型定义';
                break;
        }
        output = addTsDefinition(output, summary);
        await fs.writeFile('DOC_' + locale + '.md', output, 'utf8');
        console.log('DOC_' + locale + '.md generated');
    }
}

async function updateDoc() {
    await eustiaBuild({
        include: keys(output),
        enableLog: true,
        library: 'src',
        output: '.licia/testUtil/doc.js',
        ts: true
    });
    await eustiaDoc({
        input: '.licia/testUtil/doc.js',
        format: 'md',
        title: 'Licia Documentation',
        output: OUTPUT_DOC_PATH
    });
    let doc = await fs.readFile(OUTPUT_DOC_PATH, 'utf8');
    doc = doc.replace(regTsIgnore, '');
    doc = addTsDefinition(doc);
    await fs.writeFile(OUTPUT_DOC_PATH, doc, 'utf8');

    const sections = splitH2(doc);
    await genSkillDocs(sections);
    await genI18n(sections);
}

function bucketName(name) {
    const first = name[0].toLowerCase();
    return /[a-z]/.test(first) ? first : '_';
}

async function genSkillDocs(sections) {
    await fs.mkdir(SKILL_REFERENCES_DIR, { recursive: true });

    const oldFiles = await fs.readdir(SKILL_REFERENCES_DIR);
    for (const file of oldFiles) {
        if (file.endsWith('.md')) {
            await fs.unlink(SKILL_REFERENCES_DIR + '/' + file);
        }
    }

    const buckets = {};
    for (const section of sections) {
        const bucket = bucketName(section.name);
        (buckets[bucket] = buckets[bucket] || []).push(section);
    }

    const bucketCount = Object.keys(buckets).length;
    const index = [
        '# Licia Module Index',
        '',
        'One row per module; columns are name, description, bucket file,',
        'start line and line count. Modules are grouped by first letter into',
        bucketCount + ' files under `references/`.',
        '',
        'Grep a capability keyword (or a module name) here, then Read the given',
        'line range of its bucket file.',
        '',
        '| Module | Description | Bucket | Start line | Lines |',
        '| --- | --- | --- | --- | --- |'
    ];

    for (const bucket of Object.keys(buckets).sort()) {
        const parts = [];
        let line = 1;
        const header = '# Licia Reference: ' + bucket + '\n\n';
        parts.push(header);
        line += header.split('\n').length - 1;

        for (const { name, content } of buckets[bucket]) {
            const body = '## ' + name + '\n\n' + content + '\n\n';
            const lines = body.split('\n').length - 1;
            parts.push(body);

            const desc = (output[name] && output[name].description) || '';
            index.push(
                '| `' +
                    name +
                    '` | ' +
                    desc.replace(/\|/g, '\\|') +
                    ' | `references/' +
                    bucket +
                    '.md` | ' +
                    line +
                    ' | ' +
                    lines +
                    ' |'
            );
            line += lines;
        }

        await fs.writeFile(
            SKILL_REFERENCES_DIR + '/' + bucket + '.md',
            parts.join('').trimEnd() + '\n',
            'utf8'
        );
    }

    await fs.writeFile(
        SKILL_DIR + '/INDEX.md',
        index.join('\n') + '\n',
        'utf8'
    );

    console.log(
        'Skill docs generated: ' +
            sections.length +
            ' modules -> ' +
            bucketCount +
            ' bucket files in ' +
            SKILL_DIR
    );
}

async function updateCSpell() {
    const cSpell = require('../cspell.json');
    cSpell.words = unique(concat(cSpell.words, keys(output)));
    await fs.writeFile('cspell.json', JSON.stringify(cSpell, null, 2), 'utf8');
    console.log('cspell.json updated');
}

const tsDefinitions = {};

async function extractInfo() {
    const files = await glob('src/*.js');

    for (const file of files) {
        const modName = last(file.split('/')).slice(0, -3);

        const data = await fs.readFile(file, 'utf8');

        let desc = 'No description.';
        const comments = extractBlockCmts(data);

        if (comments.length > 0) {
            desc = trim(comments[0]).split('\n')[0];
        }

        const modInfo = extend(
            {
                description: desc,
                dependencies: filter(
                    extractDependencies(data),
                    dep => dep !== 'types'
                )
            },
            extractCmts(comments)
        );
        if (modInfo.tsDefinition) {
            tsDefinitions[modName] = modInfo.tsDefinition;
        }
        delete modInfo.tsDefinition;
        output[modName] = modInfo;
    }

    function extractCmts(comments) {
        const ret = {};

        each(comments, function(comment) {
            const lines = trim(comment).split('\n');
            const type = trim(lines[0]);
            if (type === 'typescript') {
                let tsDefinition = comment.replace(/^typescript/, '');
                tsDefinition = tsDefinition.replace(/export declare /g, '');
                tsDefinition = outdentOneSpace(tsDefinition);
                ret['tsDefinition'] = trim(tsDefinition);
            }
            if (type !== 'module') return;
            lines.shift();
            each(lines, function(line) {
                const splitterPos = line.indexOf(':');
                const name = trim(line.slice(0, splitterPos));
                let val = trim(line.slice(splitterPos + 1));
                if (name === 'env') {
                    if (val === 'all') {
                        val = ['node', 'browser', 'miniprogram'];
                    } else {
                        val = val.split(/\s+/g);
                    }
                }
                if (name === 'test') {
                    if (val === 'manual') {
                        val = [];
                    } else if (val === 'all') {
                        val = ['node', 'browser'];
                    } else {
                        val = [val];
                    }
                }

                ret[name] = val;
            });
        });

        if (!ret['test']) {
            const env = ret['env'];
            const val = [];
            if (contain(env, 'node')) val.push('node');
            if (contain(env, 'browser')) val.push('browser');
            ret['test'] = val;
        }

        return ret;
    }
}

async function detectBenchmark() {
    const files = await glob('benchmark/*.js');

    const list = map(files, function(file) {
        return file
            .split('/')
            .pop()
            .replace('.js', '');
    });

    each(list, function(modName) {
        output[modName].benchmark = true;
    });
}

async function detectDemo() {
    const files = await glob('demo/*.demo.html');

    const list = map(files, function(file) {
        return file
            .split('/')
            .pop()
            .replace('.demo.html', '');
    });

    each(list, function(modName) {
        output[modName].demo = true;
    });
}

async function writeOutput() {
    await fs.writeFile(
        OUTPUT_PATH,
        JSON.stringify(sortKeys(output, { deep: true }), null, 4),
        'utf8'
    );

    console.log('Index file generated: ' + OUTPUT_PATH);
}

function addTsDefinition(doc, summary = 'Type Definition') {
    return doc.replace(/^##\s+([\w$]+)\s+[^\n]+/gm, function(match, name) {
        if (!tsDefinitions[name]) return match;
        return (
            match +
            `\n\n<details>\n<summary>${summary}</summary>\n\n\`\`\`typescript\n${tsDefinitions[name]}\n\`\`\`\n\n</details>`
        );
    });
}
