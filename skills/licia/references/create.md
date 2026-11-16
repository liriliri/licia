## create

Create new object using given object as prototype.

<details>
<summary>Type Definition</summary>

```typescript
function create(proto?: object): any;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|proto |Prototype of new object|
|return|Created object         |

```javascript
const obj = create({ a: 1 });
console.log(obj.a); // -> 1
```
