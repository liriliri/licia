## decodeUriComponent

Better decodeURIComponent that does not throw if input is invalid.

<details>
<summary>Type Definition</summary>

```typescript
function decodeUriComponent(str: string): string;
```

</details>

|Name  |Desc            |
|------|----------------|
|str   |String to decode|
|return|Decoded string  |

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```
