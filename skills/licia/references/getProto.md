## getProto

Get prototype of an object.

<details>
<summary>Type Definition</summary>

```typescript
function getProto(obj: any): any;
```

</details>

|Name  |Desc                                         |
|------|---------------------------------------------|
|obj   |Target object                                |
|return|Prototype of given object, null if not exists|

```javascript
const a = {};
getProto(Object.create(a)); // -> a
```
