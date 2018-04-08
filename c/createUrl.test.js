var isUrl = util.isUrl,
    each = util.each;

it('basic', function () 
{
    var tests = [
        ['test', {type: 'text/plain'}],
        [['test', 'test']],
        [new Blob([])],
        [new File(['test'], 'test.txt')]  
    ];

    each(tests, function (test) 
    {
        var content = test[0],
            opts = test[1];

        var url = opts ? createUrl(content, opts) : createUrl(content);    

        expect(isBlobUrl(url)).to.be.true;
    });
});

function isBlobUrl(url) 
{
    return isUrl(url.replace(regBlob, ''));
}

var regBlob = /^blob:/;