## combine

Create an array by using one array for keys and another for its values.

<details>
<summary>Type Definition</summary>

```typescript
function combine(keys: string[], values: any[]): any;
```

</details>

|Name  |Desc             |
|------|-----------------|
|keys  |Keys to be used  |
|values|Values to be used|
|return|Created object   |

```javascript
combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
```
