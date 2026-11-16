## sameOrigin

Check if two urls pass the same origin policy.

<details>
<summary>Type Definition</summary>

```typescript
function sameOrigin(url1: string, url2: string): boolean;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|url1  |Url to check                        |
|url2  |Url to check                        |
|return|True if urls pass same origin policy|

```javascript
const url1 = 'http://example.com/a.html';
const url2 = 'http://example.com/b.html';
const url3 = 'http://licia.liriliri.io';
sameOrigin(url1, url2); // -> true
sameOrigin(url1, url3); // -> false
```
