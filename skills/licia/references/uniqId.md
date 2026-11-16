## uniqId

Generate a globally-unique id.

<details>
<summary>Type Definition</summary>

```typescript
function uniqId(prefix?: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|prefix|Id prefix         |
|return|Globally-unique id|

```javascript
uniqId('eustia_'); // -> 'eustia_xxx'
```
