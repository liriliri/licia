it('true', function() {
    expect(isTypedArr(new Int16Array())).to.be.true;
    expect(isTypedArr(new Int32Array())).to.be.true;
    expect(isTypedArr(new Uint8Array())).to.be.true;
    expect(isTypedArr(new Uint8ClampedArray())).to.be.true;
    expect(isTypedArr(new Uint16Array())).to.be.true;
    expect(isTypedArr(new Uint32Array())).to.be.true;
    expect(isTypedArr(new Float32Array())).to.be.true;
    expect(isTypedArr(new Float64Array())).to.be.true;
});

it('false', function() {
    expect(isTypedArr([])).to.be.false;
    expect(isTypedArr({})).to.be.false;
});
