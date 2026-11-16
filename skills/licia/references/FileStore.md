## FileStore

File storage.

<details>
<summary>Type Definition</summary>

```typescript
class FileStore extends Store {
    constructor(path: string, data?: any);
}
```

</details>

### constructor

|Name|Desc              |
|----|------------------|
|path|File path to store|
|data|Default data      |

```javascript
const store = new FileStore('path/to/file');
store.set('name', 'licia');
```
