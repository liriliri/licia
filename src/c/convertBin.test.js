const type = util.type;
const isBrowser = util.isBrowser;
const isNode = util.isNode;
const isBuffer = util.isBuffer;

const base64 = 'qK6b/w==';
const arr = [168, 174, 155, 255];
const arrBuffer = new ArrayBuffer(4);
const uint8arr = new Uint8Array(arrBuffer);
arr.forEach((val, idx) => {
    uint8arr[idx] = val;
});

it('Uint8Array', () => {
    let result = convertBin(uint8arr, 'base64');
    expect(result).to.equal(base64);
    expect(type(result)).to.equal('string');

    result = convertBin(uint8arr, 'ArrayBuffer');
    expect(type(result)).to.equal('arraybuffer');

    result = convertBin(uint8arr, 'Array');
    expect(result).to.eql(arr);
    expect(type(result)).to.equal('array');
});

it('base64', () => {
    const result = convertBin(base64, 'Uint8Array');
    expect(result).to.eql(uint8arr);
    expect(type(result)).to.equal('uint8array');
});

it('ArrayBuffer', () => {
    const result = convertBin(arrBuffer, 'Uint8Array');
    expect(result).to.eql(uint8arr);
    expect(type(result)).to.equal('uint8array');
});

it('Array', () => {
    const result = convertBin(arr, 'Uint8Array');
    expect(result).to.eql(uint8arr);
    expect(type(result)).to.equal('uint8array');
});

if (isBrowser) {
    it('Blob', async () => {
        let result = convertBin(
            await convertBin.blobToArrBuffer(new Blob([arrBuffer])),
            'Uint8Array'
        );
        expect(result).to.eql(uint8arr);
        expect(type(result)).to.equal('uint8array');

        result = convertBin(uint8arr, 'Blob');
        expect(type(result)).to.equal('blob');
    });
}

if (isNode) {
    it('Buffer', async () => {
        let result = convertBin(Buffer.from(arr), 'Uint8Array');
        expect(result).to.eql(uint8arr);
        expect(type(result)).to.equal('uint8array');

        result = convertBin(uint8arr, 'Buffer');
        expect(isBuffer(result)).to.be.true;
    });
}
