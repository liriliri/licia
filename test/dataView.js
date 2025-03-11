if (util.isBrowser) {
    it('int8', () => {
        const buf = new Uint8Array([0x80]);
        expect(dataView.getInt8(buf, 0)).to.equal(
            new DataView(buf.buffer).getInt8(0)
        );
    });
    it('int16 little endian', () => {
        const buf = new Uint8Array(2);
        dataView.setInt16(buf, 0, 0x8000, true);
        expect(dataView.getInt16(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getInt16(0, true)
        );
    });
    it('int16 big endian', () => {
        const buf = new Uint8Array(2);
        dataView.setInt16(buf, 0, 0x8000);
        expect(dataView.getInt16(buf, 0)).to.equal(
            new DataView(buf.buffer).getInt16(0)
        );
    });
    it('uint16 little endian', () => {
        const buf = new Uint8Array(2);
        dataView.setUint16(buf, 0, 0x8000, true);
        expect(dataView.getUint16(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getUint16(0, true)
        );
    });
    it('uint16 big endian', () => {
        const buf = new Uint8Array(2);
        dataView.setUint16(buf, 0, 0x8000);
        expect(dataView.getUint16(buf, 0)).to.equal(
            new DataView(buf.buffer).getUint16(0)
        );
    });
    it('int32 little endian', () => {
        const buf = new Uint8Array(4);
        dataView.setInt32(buf, 0, 0x80000000, true);
        expect(dataView.getInt32(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getInt32(0, true)
        );
    });
    it('int32 big endian', () => {
        const buf = new Uint8Array(4);
        dataView.setInt32(buf, 0, 0x80000000);
        expect(dataView.getInt32(buf, 0)).to.equal(
            new DataView(buf.buffer).getInt32(0)
        );
    });
    it('uint32 little endian', () => {
        const buf = new Uint8Array(4);
        dataView.setUint32(buf, 0, 0x80000000, true);
        expect(dataView.getUint32(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getUint32(0, true)
        );
    });
    it('uint32 big endian', () => {
        const buf = new Uint8Array(4);
        dataView.setUint32(buf, 0, 0x80000000);
        expect(dataView.getUint32(buf, 0)).to.equal(
            new DataView(buf.buffer).getUint32(0)
        );
    });
    it('int64 little endian', () => {
        const buf = new Uint8Array(8);
        dataView.setBigInt64(buf, 0, 0x8000000000000000n, true);
        expect(dataView.getBigInt64(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getBigInt64(0, true)
        );
    });
    it('int64 big endian', () => {
        const buf = new Uint8Array(8);
        dataView.setBigInt64(buf, 0, 0x8000000000000000n);
        expect(dataView.getBigInt64(buf, 0)).to.equal(
            new DataView(buf.buffer).getBigInt64(0)
        );
    });
    it('uint64 little endian', () => {
        const buf = new Uint8Array(8);
        dataView.setBigUint64(buf, 0, 0x8000000000000000n, true);
        expect(dataView.getBigUint64(buf, 0, true)).to.equal(
            new DataView(buf.buffer).getBigUint64(0, true)
        );
    });
    it('uint64 big endian', () => {
        const buf = new Uint8Array(8);
        dataView.setBigUint64(buf, 0, 0x8000000000000000n);
        expect(dataView.getBigUint64(buf, 0)).to.equal(
            new DataView(buf.buffer).getBigUint64(0)
        );
    });
}
