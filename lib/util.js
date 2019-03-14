const rmdir = require('licia/rmdir')
const promisify = require('licia/promisify')
const glob = require('glob')
const mkdir = require('licia/mkdir')
const ncp = require('ncp')

const regStartOneSpace = /^ /gm;

exports.outdentOneSpace = function(data) {
    return data.replace(regStartOneSpace, '');
}

exports.rmdir = promisify(rmdir)
exports.glob = promisify(glob)
exports.mkdir = promisify(mkdir)
exports.cpFile = promisify(ncp)