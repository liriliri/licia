const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const pkg = require('../package.json');
const pkgPath = path.resolve(__dirname, '../package.json');

writePkgName('licia-src');

childProcess.execSync('npm i licia', {
    cwd: path.resolve(__dirname, '../'),
    stdio: 'inherit'
});

writePkgName('licia');

function writePkgName(name) {
    pkg.name = name;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
}
