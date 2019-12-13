test([
    [new Int16Array(), true],
    [new Int32Array(), true],
    [new Uint8Array(), true],
    [new Uint8ClampedArray(), true],
    [new Uint16Array(), true],
    [new Uint32Array(), true],
    [new Float32Array(), true],
    [new Float64Array(), true],
    [[], false],
    [{}, false]
]);
