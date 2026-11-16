## isDataUrl

Check if a string is a valid data url.

<details>
<summary>Type Definition</summary>

```typescript
function isDataUrl(str: string): boolean;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|str   |String to check             |
|return|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```
