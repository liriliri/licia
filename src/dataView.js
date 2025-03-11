/* Like DataView, but without creating a new object.
 */

/* example
 * const buf = new Uint8Array([0x80]);
 * dataView.getInt8(buf, 0); // -> -128
 */

/* module
 * env: all
 */

/* typescript
 * export declare const dataView: {
 *     getInt8(buf: Uint8Array, offset: number): number;
 *     getInt16(buf: Uint8Array, offset: number, le?: boolean): number;
 *     setInt16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
 *     getUint16(buf: Uint8Array, offset: number, le?: boolean): number;
 *     setUint16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
 *     getInt32(buf: Uint8Array, offset: number, le?: boolean): number;
 *     setInt32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
 *     getUint32(buf: Uint8Array, offset: number, le?: boolean): number;
 *     setUint32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
 *     getBigInt64(buf: Uint8Array, offset: number, le?: boolean): bigint;
 *     setBigInt64(
 *         buf: Uint8Array,
 *         offset: number,
 *         val: bigint,
 *         le?: boolean
 *     ): void;
 *     getBigUint64(buf: Uint8Array, offset: number, le?: boolean): bigint;
 *     setBigUint64(
 *         buf: Uint8Array,
 *         offset: number,
 *         val: bigint,
 *         le?: boolean
 *     ): void;
 * };
 */

// https://github.com/yume-chan/ya-webadb/tree/main/libraries/no-data-view
exports = {
    getInt8(buf, offset) {
        return (buf[offset] << 24) >> 24;
    },
    getInt16(buf, offset, le) {
        if (le) {
            return ((buf[offset] | (buf[offset + 1] << 8)) << 16) >> 16;
        } else {
            return (((buf[offset] << 8) | buf[offset + 1]) << 16) >> 16;
        }
    },
    setInt16(buf, offset, val, le) {
        if (le) {
            buf[offset] = val;
            buf[offset + 1] = val >> 8;
        } else {
            buf[offset] = val >> 8;
            buf[offset + 1] = val;
        }
    },
    getUint16(buf, offset, le) {
        if (le) {
            return buf[offset] | (buf[offset + 1] << 8);
        } else {
            return buf[offset + 1] | (buf[offset] << 8);
        }
    },
    setUint16(buf, offset, val, le) {
        if (le) {
            buf[offset] = val;
            buf[offset + 1] = val >> 8;
        } else {
            buf[offset] = val >> 8;
            buf[offset + 1] = val;
        }
    },
    getInt32(buf, offset, le) {
        if (le) {
            return (
                buf[offset] |
                (buf[offset + 1] << 8) |
                (buf[offset + 2] << 16) |
                (buf[offset + 3] << 24)
            );
        } else {
            return (
                (buf[offset] << 24) |
                (buf[offset + 1] << 16) |
                (buf[offset + 2] << 8) |
                buf[offset + 3]
            );
        }
    },
    setInt32(buf, offset, val, le) {
        if (le) {
            buf[offset] = val;
            buf[offset + 1] = val >> 8;
            buf[offset + 2] = val >> 16;
            buf[offset + 3] = val >> 24;
        } else {
            buf[offset] = val >> 24;
            buf[offset + 1] = val >> 16;
            buf[offset + 2] = val >> 8;
            buf[offset + 3] = val;
        }
    },
    getUint32(buf, offset, le) {
        return this.getInt32(buf, offset, le) >>> 0;
    },
    setUint32(buf, offset, val, le) {
        this.setInt32(buf, offset, val, le);
    },
    getBigInt64(buf, offset, le) {
        if (le) {
            return (
                BigInt(buf[offset]) |
                (BigInt(buf[offset + 1]) << 8n) |
                (BigInt(buf[offset + 2]) << 16n) |
                (BigInt(buf[offset + 3]) << 24n) |
                (BigInt(buf[offset + 4]) << 32n) |
                (BigInt(buf[offset + 5]) << 40n) |
                (BigInt(buf[offset + 6]) << 48n) |
                (BigInt(buf[offset + 7] << 24) << 32n)
            );
        } else {
            return (
                (BigInt(buf[offset] << 24) << 32n) |
                (BigInt(buf[offset + 1]) << 48n) |
                (BigInt(buf[offset + 2]) << 40n) |
                (BigInt(buf[offset + 3]) << 32n) |
                (BigInt(buf[offset + 4]) << 24n) |
                (BigInt(buf[offset + 5]) << 16n) |
                (BigInt(buf[offset + 6]) << 8n) |
                BigInt(buf[offset + 7])
            );
        }
    },
    setBigInt64(buf, offset, val, le) {
        if (le) {
            buf[offset] = Number(val & 0xffn);
            buf[offset + 1] = Number((val >> 8n) & 0xffn);
            buf[offset + 2] = Number((val >> 16n) & 0xffn);
            buf[offset + 3] = Number((val >> 24n) & 0xffn);
            buf[offset + 4] = Number((val >> 32n) & 0xffn);
            buf[offset + 5] = Number((val >> 40n) & 0xffn);
            buf[offset + 6] = Number((val >> 48n) & 0xffn);
            buf[offset + 7] = Number((val >> 56n) & 0xffn);
        } else {
            buf[offset] = Number((val >> 56n) & 0xffn);
            buf[offset + 1] = Number((val >> 48n) & 0xffn);
            buf[offset + 2] = Number((val >> 40n) & 0xffn);
            buf[offset + 3] = Number((val >> 32n) & 0xffn);
            buf[offset + 4] = Number((val >> 24n) & 0xffn);
            buf[offset + 5] = Number((val >> 16n) & 0xffn);
            buf[offset + 6] = Number((val >> 8n) & 0xffn);
            buf[offset + 7] = Number(val & 0xffn);
        }
    },
    getBigUint64(buf, offset, le) {
        if (le) {
            return (
                BigInt(buf[offset]) |
                (BigInt(buf[offset + 1]) << 8n) |
                (BigInt(buf[offset + 2]) << 16n) |
                (BigInt(buf[offset + 3]) << 24n) |
                (BigInt(buf[offset + 4]) << 32n) |
                (BigInt(buf[offset + 5]) << 40n) |
                (BigInt(buf[offset + 6]) << 48n) |
                (BigInt(buf[offset + 7]) << 56n)
            );
        } else {
            return (
                (BigInt(buf[offset]) << 56n) |
                (BigInt(buf[offset + 1]) << 48n) |
                (BigInt(buf[offset + 2]) << 40n) |
                (BigInt(buf[offset + 3]) << 32n) |
                (BigInt(buf[offset + 4]) << 24n) |
                (BigInt(buf[offset + 5]) << 16n) |
                (BigInt(buf[offset + 6]) << 8n) |
                BigInt(buf[offset + 7])
            );
        }
    },
    setBigUint64(buf, offset, val, le) {
        this.setBigInt64(buf, offset, val, le);
    }
};
