## utf8

UTF-8 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const utf8: {
    encode(str: string): string;
    decode(str: string, safe?: boolean): string;
};
```

</details>

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|Name  |Desc            |
|------|----------------|
|str   |String to encode|
|return|Encoded string  |

### decode

Turn any UTF-8 encoded string into UTF-8 decoded string.

|Name      |Desc                  |
|----------|----------------------|
|str       |String to decode      |
|safe=false|Suppress error if true|
|return    |Decoded string        |

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```
