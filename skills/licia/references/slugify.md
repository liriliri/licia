## slugify

Slugify a string.

<details>
<summary>Type Definition</summary>

```typescript
function slugify(
    str: string,
    replacement?: { [index: string]: string }
): string;
```

</details>

|Name       |Desc              |
|-----------|------------------|
|str        |String to slugify |
|replacement|Custom replacement|
|return     |Slugified string  |

```javascript
slugify('I ♥ pony'); // -> 'I-love-pony'
slugify('I ♥ pony', { ' ': '_' }); // -> 'I_love_pony'
```
