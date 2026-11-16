## normalizeHeader

Normalize http header name.

<details>
<summary>Type Definition</summary>

```typescript
function normalizeHeader(header: string): string;
```

</details>

|Name  |Desc               |
|------|-------------------|
|header|Header to normalize|
|return|Normalized header  |

```javascript
normalizeHeader('content-type'); // -> 'Content-Type'
normalizeHeader('etag'); // -> 'ETag'
```
