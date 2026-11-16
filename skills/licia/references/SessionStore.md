## SessionStore

SessionStorage wrapper.

<details>
<summary>Type Definition</summary>

```typescript
class SessionStore extends Store {
    constructor(name: string, data?: any);
}
```

</details>

Extend from Store.

### constructor

|Name|Desc                    |
|----|------------------------|
|name|SessionStorage item name|
|data|Default data            |

```javascript
const store = new SessionStore('licia');
store.set('name', 'licia');
```
