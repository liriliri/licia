const isUrl = util.isUrl;

function isBlobUrl(url) {
    return isUrl(url.replace(regBlob, ''));
}

const regBlob = /^blob:/;

const tests = [
    ['test', { type: 'text/plain' }],
    [['test', 'test']],
    [new Blob([])],
    [new File(['test'], 'test.txt')]
];

util.each(tests, function(test) {
    const content = test[0];
    const opts = test[1];

    const url = opts ? createUrl(content, opts) : createUrl(content);

    expect(isBlobUrl(url)).to.be.true;
});
