var fs = require('fs');

module.exports = function (path, data, cb)
{
    fs.writeFile(path, data, 'utf-8', function (err)
    {
        if (err) return cb(err);

        cb();
    });
};