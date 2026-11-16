## invert

Create an object composed of the inverted keys and values of object.

<details>
<summary>Type Definition</summary>

```typescript
function invert(obj: any): any;
```

</details>

|Name  |Desc               |
|------|-------------------|
|obj   |Object to invert   |
|return|New inverted object|

If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```javascript
invert({ a: 'b', c: 'd', e: 'f' }); // -> {b: 'a', d: 'c', f: 'e'}
```
