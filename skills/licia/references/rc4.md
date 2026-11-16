## rc4

RC4 symmetric encryption implementation.

<details>
<summary>Type Definition</summary>

```typescript
const rc4: {
    encrypt(key: string, str: string): string;
    decrypt(key: string, str: string): string;
};
```

</details>

### encrypt

RC4 encryption, result as base64 string.

### decrypt

RC4 decryption, pass base64 string as input.

|Name  |Desc                            |
|------|--------------------------------|
|key   |Secret key                      |
|str   |String to be encrypted/decrypted|
|return|Encrypted/decrypted string      |

```javascript
rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
```
