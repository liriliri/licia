## morse

Morse code encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const morse: {
    encode(txt: string): string;
    decode(morse: string): string;
};
```

</details>

### encode

Turn text into Morse code.

|Name  |Desc          |
|------|--------------|
|txt   |Text to encode|
|return|Morse code    |

### decode

Decode Morse code into text.

|Name  |Desc          |
|------|--------------|
|morse |Morse code    |
|return|Decoded string|

```javascript
const str = morse.encode('Hello, world.');
// -> '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-'
morse.decode(str); // -> 'Hello, world.'
```
