## linkify

Hyperlink urls in a string.

<details>
<summary>Type Definition</summary>

```typescript
function linkify(str: string, hyperlink?: types.AnyFn): string;
```

</details>

|Name     |Desc                     |
|---------|-------------------------|
|str      |String to hyperlink      |
|hyperlink|Function to hyperlink url|
|return   |Result string            |

```javascript
const str = 'Official site: http://eustia.liriliri.io';
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```
