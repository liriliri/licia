## isAbsoluteUrl

Check if an url is absolute.

<details>
<summary>Type Definition</summary>

```typescript
function isAbsoluteUrl(url: string): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|url   |Url to check           |
|return|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```
