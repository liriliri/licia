## getPort

Get an available TCP port.

<details>
<summary>Type Definition</summary>

```typescript
function getPort(
    port?: number | number[],
    host?: string
): Promise<number>;
```

</details>

|Name  |Desc           |
|------|---------------|
|port  |Preferred ports|
|host  |Host address   |
|return|Available port |

If preferred ports are not available, a random port will be returned.

```javascript
getPort([3000, 3001], '127.0.0.1').then(port => {
    console.log(port);
});
```
