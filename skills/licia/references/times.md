## times

Invoke given function n times.

<details>
<summary>Type Definition</summary>

```typescript
function times<T>(
    n: number,
    fn: (n: number) => T,
    ctx?: any
): T[];
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|n     |Times to invoke function      |
|fn    |Function invoked per iteration|
|ctx   |Function context              |
|return|Array of results              |

```javascript
times(3, String); // -> ['0', '1', '2']
```
