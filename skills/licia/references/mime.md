## mime

Common mime types.

<details>
<summary>Type Definition</summary>

```typescript
function mime(name: string): string | undefined;
```

</details>

|Name  |Desc     |
|------|---------|
|name  |Extension|
|return|Mime type|

|Name  |Desc     |
|------|---------|
|name  |Mime type|
|return|Extension|

It contains only the most common file types.

```javascript
mime('jpg'); // -> 'image/jpeg'
mime('bmp'); // -> 'image/bmp'
mime('video/mp4'); // -> 'mp4'
mime('test'); // -> undefined
```
