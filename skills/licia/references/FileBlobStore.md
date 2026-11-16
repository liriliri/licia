## FileBlobStore

Binary file storage.

<details>
<summary>Type Definition</summary>

```typescript
class FileBlobStore extends Emitter {
    constructor(path: string, data?: types.PlainObj<Buffer>);
    set(key: string, buf: Buffer): void;
    set(values: types.PlainObj<Buffer>): void;
    get(key: string): Buffer | void;
    get(keys: string[]): types.PlainObj<Buffer>;
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (val: Buffer, key: string) => void): void;
    save(): void;
}
```

</details>

Most api is the same as Store module, except only buffer is accepted.

### save

Save data to disk.

```javascript
const store = new FileBlobStore('path/to/file');
store.set('name', Buffer.from('licia'));
process.on('exit', () => store.save());
```
