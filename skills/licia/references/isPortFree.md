## isPortFree

Check if a TCP port is free.

<details>
<summary>Type Definition</summary>

```typescript
function isPortFree(
    port: number,
    host?: string
): Promise<boolean>;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|port  |TCP port                  |
|host  |Host address              |
|return|True if given port is free|

```javascript
isPortFree(3000).then(isFree => {
    // Do something.
});
```
