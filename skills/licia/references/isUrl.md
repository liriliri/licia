## isUrl

Loosely validate an url.

<details>
<summary>Type Definition</summary>

```typescript
function isUrl(val: string): boolean;
```

</details>

|Name  |Desc                               |
|------|-----------------------------------|
|val   |Value to check                     |
|return|True if value is an url like string|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```
