## isStream

Check if value is a Node.js stream.

<details>
<summary>Type Definition</summary>

```typescript
function isStream(val: any): boolean;
```

</details>

|Name  |Desc                             |
|------|---------------------------------|
|val   |Value to check                   |
|return|True if value is a Node.js stream|

```javascript
const stream = require('stream');

isStream(new stream.Stream()); // -> true
```
