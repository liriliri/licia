const isUrl = util.isUrl;

function isBlobUrl(url) {
    return isUrl(url.replace(regBlob, ''));
}

const regBlob = /^blob:/;

const testData = [
    ['test', { type: 'text/plain' }],
    [['test', 'test']],
    [new Blob([])],
    [new File(['test'], 'test.txt')]
];

util.each(testData, function(test) {
    const content = test[0];
    const opts = test[1];

    const url = opts ? createUrl(content, opts) : createUrl(content);

    expect(isBlobUrl(url)).to.be.true;
});
