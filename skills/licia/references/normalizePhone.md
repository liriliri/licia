## normalizePhone

Normalize phone numbers into E.164 format.

<details>
<summary>Type Definition</summary>

```typescript
function normalizePhone(
    phone: string,
    options: {
        countryCode: number;
        trunkPrefix?: boolean;
    }
): string;
```

</details>

|Name   |Desc              |
|-------|------------------|
|phone  |Phone to normalize|
|options|Normalize options |
|return |Normalized phone  |

Available options:

|Name             |Desc                                 |
|-----------------|-------------------------------------|
|countryCode      |Country code                         |
|trunkPrefix=false|True if local format has trunk prefix|

```javascript
normalizePhone('13512345678', {
    countryCode: 86
}); // -> '+8613512345678'
normalizePhone('(415) 555-2671', {
    countryCode: 1
}); // -> '+14155552671'
normalizePhone('020 7183 8750', {
    countryCode: 44,
    trunkPrefix: true
}); // -> '+442071838750'
```
