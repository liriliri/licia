## prefetch

Fetch a given url.

<details>
<summary>Type Definition</summary>

```typescript
function prefetch(url: string): Promise<void>;
```

</details>

|Name  |Desc           |
|------|---------------|
|url   |Url to prefetch|

It uses `<link rel=prefetch>` if possible.

```javascript
prefetch('https://eustia.liriliri.io/');
```
