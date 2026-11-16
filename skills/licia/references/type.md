## type

Determine the internal JavaScript [[Class]] of an object.

<details>
<summary>Type Definition</summary>

```typescript
function type(val: any, lowerCase?: boolean): string;
```

</details>

|Name          |Desc             |
|--------------|-----------------|
|val           |Value to get type|
|lowerCase=true|LowerCase result |
|return        |Type of object   |

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function() {}); // -> 'function'
type([]); // -> 'array'
type([], false); // -> 'Array'
type(async function() {}, false); // -> 'AsyncFunction'
```
