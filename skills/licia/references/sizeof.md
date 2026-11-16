## sizeof

Get approximate size of a js object.

<details>
<summary>Type Definition</summary>

```typescript
function sizeof(obj: any): number;
```

</details>

|Name  |Desc               |
|------|-------------------|
|obj   |Object to calculate|
|return|Size in bytes      |

A char of string is counted as 2 bytes. And 4 bytes for boolean, 8 bytes for number.

Object keys are treated as strings.

```javascript
sizeof('a'); // -> 2
sizeof(8); // -> 8
sizeof(false); // -> 4
sizeof(function() {}); // -> 0
sizeof({ a: 'b' }); // -> 4
```
