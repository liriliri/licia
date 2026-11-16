## sleep

Resolve a promise after a specified timeout.

<details>
<summary>Type Definition</summary>

```typescript
function sleep(timeout: number): Promise<void>;
```

</details>

|Name   |Desc         |
|-------|-------------|
|timeout|Sleep timeout|

```javascript
(async function() {
    await sleep(2000);
})();
```
