## safeStorage

Use storage safely in safari private browsing and older browsers.

<details>
<summary>Type Definition</summary>

```typescript
function safeStorage(type?: string): typeof window.localStorage;
```

</details>

|Name        |Desc             |
|------------|-----------------|
|type='local'|local or session |
|return      |Specified storage|

```javascript
const localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```
