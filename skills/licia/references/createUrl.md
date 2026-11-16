## createUrl

CreateObjectURL wrapper.

<details>
<summary>Type Definition</summary>

```typescript
function createUrl(
    data: any,
    options?: { type?: string }
): string;
```

</details>

|Name   |Desc                                |
|-------|------------------------------------|
|data   |Url data                            |
|options|Used when data is not a File or Blob|
|return |Blob url                            |

```javascript
createUrl('test', { type: 'text/plain' }); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```
