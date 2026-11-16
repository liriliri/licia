## objToStr

Alias of Object.prototype.toString.

<details>
<summary>Type Definition</summary>

```typescript
function objToStr(val: any): string;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Source value                        |
|return|String representation of given value|

```javascript
objToStr(5); // -> '[object Number]'
```
