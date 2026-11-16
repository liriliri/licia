## ucs2

UCS-2 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const ucs2: {
    encode(arr: number[]): string;
    decode(str: string): number[];
};
```

</details>

### encode

Create a string using an array of code point values.

|Name  |Desc                |
|------|--------------------|
|arr   |Array of code points|
|return|Encoded string      |

### decode

Create an array of code point values using a string.

|Name  |Desc                |
|------|--------------------|
|str   |Input string        |
|return|Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```
