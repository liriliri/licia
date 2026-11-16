## dataUrl

Parse and stringify data urls.

<details>
<summary>Type Definition</summary>

```typescript
const dataUrl: {
    parse(
        dataUrl: string
    ): { data: string; mime: string; charset: string; base64: boolean } | null;
    stringify(
        data: string | number[] | Uint8Array | ArrayBuffer | ArrayBufferView,
        mime: string,
        options?: { base64?: boolean; charset?: string }
    ): string;
};
```

</details>

### parse

Parse a data url.

|Name   |Desc           |
|-------|---------------|
|dataUrl|Data url string|
|return |Parsed object  |

### stringify

Stringify an object into a data url.

|Name   |Desc             |
|-------|-----------------|
|data   |Data to stringify|
|mime   |Mime type        |
|options|Stringify options|
|return |Data url string  |

### options

|Name       |Desc             |
|-----------|-----------------|
|base64=true|Whether is base64|
|charset    |Charset          |

```javascript
dataUrl.parse('data:,Hello%2C%20World%21'); // -> {data: 'Hello, World!', mime: 'text/plain', charset: '', base64: false}
dataUrl.stringify('Hello, World!', 'text/plain'); // -> 'data:,Hello%2C%20World%21'
```
