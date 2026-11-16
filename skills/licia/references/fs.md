## fs

Promised version of node.js fs module.

<details>
<summary>Type Definition</summary>

```typescript
const fs: {
    readFile(path: string, encoding: string): Promise<string>;
    readFile(path: string): Promise<Buffer>;
    exists(path: string): Promise<boolean>;
    unlink(path: string): Promise<void>;
    writeFile(path: string, data: string, options?: string): Promise<void>;
    writeFile(path: string, data: Buffer): Promise<void>;
    readdir(path: string): Promise<string[]>;
    rmdir(path: string): Promise<void>;
    [key: string]: any;
};
```

</details>

```javascript
fs.readFile('test.js')
    .then(function(data) {
        // Do something
    })
    .catch(function(err) {
        // Handle errors
    });
```
