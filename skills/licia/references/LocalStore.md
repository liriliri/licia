## LocalStore

LocalStorage wrapper.

<details>
<summary>Type Definition</summary>

```typescript
class LocalStore extends Store {
    constructor(name: string, data?: Record<string, any>);
}
```

</details>

Extend from Store.

### constructor

|Name|Desc                  |
|----|----------------------|
|name|LocalStorage item name|
|data|Default data          |

```javascript
const store = new LocalStore('licia');
store.set('name', 'licia');
```
