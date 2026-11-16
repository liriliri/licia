## isFile

Check if value is a file.

<details>
<summary>Type Definition</summary>

```typescript
function isFile(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a file|

```javascript
isFile(new File(['test'], 'test.txt', { type: 'text/plain' })); // -> true
```
