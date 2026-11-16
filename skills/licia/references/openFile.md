## openFile

Open file dialog to select file in browser.

<details>
<summary>Type Definition</summary>

```typescript
function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise<File[]>;
```

</details>

|Name   |Desc          |
|-------|--------------|
|options|Dialog options|
|return |Files promise |

Available options:

|Name          |Desc                        |
|--------------|----------------------------|
|accept        |File types                  |
|multiple=false|Select multiple files or not|

```javascript
openFile({ multiple: true }).then(fileList => {
    console.log(fileList);
});
```
