## isObj

Check if value is the language type of Object.

<details>
<summary>Type Definition</summary>

```typescript
function isObj(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```
