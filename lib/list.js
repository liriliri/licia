var glob = require('glob'),
    fs = require('fs');

var util = require('./util');

var output = {};

var OUTPUT_PATH = 'eris.json',
    OUTPUT_DEMO_PATH = 'demo.json';

module.exports = function ()
{
    var ignore = [
        '*/*.*.js',
        '*test/*.js',
        '*testUtil/*.js',
        '*testHtml/*.js',
        '*benchmark/*.js',
        '*lib/*.js',
        '*bin/*.js',
        '*npm/*.js'
    ];

    glob('*/*.js', {
        ignore: ignore
    }, function (err, files)
    {
        if (err) return console.log(err);

        util.parallel(genErisCbs(files), function (err)
        {
            if (err) return console.log(err);

            sortEris();
            outputEris();
        });
    });

    glob('*/*Test.html', {
        ignore: ignore
    }, function (err, files) 
    {
        var output = util.map(files, function (file) 
        {
            return file.split('/').pop().replace('Test.html', '');
        });

        fs.writeFile(OUTPUT_DEMO_PATH, JSON.stringify(output, null, 4), 'utf-8', function (err)
        {
            if (err) return console.log(err);
    
            console.log('Demo index file generated: ' + OUTPUT_DEMO_PATH);
        });
    });
};

function genErisCbs(files)
{
    var ret = [];

    util.each(files, function (file)
    {
        var modName = util.last(file.split('/')).slice(0, -3);

        ret.push(function (cb)
        {
            fs.readFile(file, 'utf-8', function (err, data)
            {
                if (err) return cb(err);

                var desc = 'No description.';

                var comments = util.extractBlockCmts(data);

                if (comments.length > 0) desc = util.trim(comments[0]).split('\n')[0];

                output[modName] = desc;

                cb();
            });
        });
    });

    return ret;
}

function sortEris()
{
    var newOutput = [];

    util.each(output, function (val, key)
    {
        newOutput.push({
            key: key,
            val: val
        });
    });

    newOutput.sort(function (a, b)
    {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;

        return 0;
    });

    output = {};

    util.each(newOutput, function (val)
    {
        output[val.key] = val.val;
    });
}

function outputEris()
{
    fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 4), 'utf-8', function (err)
    {
        if (err) return console.log(err);

        console.log('Index file generated: ' + OUTPUT_PATH);
    });
}