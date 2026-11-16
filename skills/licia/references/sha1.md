## sha1

SHA1 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function sha1(msg: string | number[] | Uint8Array): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|msg   |Message to encrypt|
|return|SHA1 hash         |

```javascript
sha1('licia'); // -> 'bf29b6b1e26689ce4fbb320df1ee534216b579d5'
```
