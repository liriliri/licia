## isJson

Check if value is a valid JSON.

<details>
<summary>Type Definition</summary>

```typescript
function isJson(val: string): boolean;
```

</details>

It uses `JSON.parse()` and a `try... catch` block.

|Name  |Desc                         |
|------|-----------------------------|
|val   |JSON string                  |
|return|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```
