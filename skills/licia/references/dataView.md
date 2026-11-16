## dataView

Like DataView, but without creating a new object.

<details>
<summary>Type Definition</summary>

```typescript
const dataView: {
    getInt8(buf: Uint8Array, offset: number): number;
    getInt16(buf: Uint8Array, offset: number, le?: boolean): number;
    setInt16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getUint16(buf: Uint8Array, offset: number, le?: boolean): number;
    setUint16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getInt32(buf: Uint8Array, offset: number, le?: boolean): number;
    setInt32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getUint32(buf: Uint8Array, offset: number, le?: boolean): number;
    setUint32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
};
```

</details>

```javascript
const buf = new Uint8Array([0x80]);
dataView.getInt8(buf, 0); // -> -128
```
