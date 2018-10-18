const glob = require('glob');
const util = require('../lib/util');

glob('*/*.i18n.md', async function(err, files) {
    for (let i = 0, len = files.length; i < len; i++) {
        const file = files[i];
        let data = await util.fs.readFile(file, 'utf8');
        if (data.indexOf('\u0008') > -1) {
            data = data.replace(/\u0008/g, '');
            await util.fs.writeFile(file, data, 'utf8');
        }
    }
});
