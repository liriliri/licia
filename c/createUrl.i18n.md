## CN

CreateObjectURL wrapper.

|参数名|类型|说明|
|-----|----|---|
|data   |File Blob string array|Url data                            | 
|[opts] |object                |Used when data is not a File or Blob|
|返回值 |string                |Blob url                            |

```javascript
createUrl('test', {type: 'text/plain'}); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```