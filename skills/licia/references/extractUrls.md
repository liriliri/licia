## extractUrls

Extract urls from plain text.

<details>
<summary>Type Definition</summary>

```typescript
function extractUrls(str: string): string[];
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |Text to extract|
|return|Url list       |

```javascript
const str =
    '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrls(str); // -> ['http://eustia.liriliri.io']
```
